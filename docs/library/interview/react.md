---
title: React 零碎知识点
author: ecstAsy
date: "2022-04-15"
---

### **_一. 组件基础_**

### **_二. 数据管理_**

#### **1. React setState 调用的原理**

![原理](../../assets/setstate.jpeg)

具体的执行过程

- 首先调用 **_setState_** 函数，入口函数在这里就是充当一个分发器的角色，根据入参不同，将其分发到不同的功能函数中

```js
ReactComponent.prototype.setState = function (partialState, callback) {
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, "setState");
  }
};
```

- **_enqueueSetState_** 方法将新的 **_state_** 放进组件的状态队列里，并调用 **_enqueueUpadate_** 来处理将要更新的实例对象

```js
enqueueSetState:function(publicInstance,partialState) {
  // 根据 this 拿到对应的组件实例
  var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
  // 这个 queue 对应的就是一个组件实例的 state 数组
  var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
  queue.push(partialState);
  //  enqueueUpdate 用来处理当前的组件实例
  enqueueUpdate(internalInstance);
}
```

- 在 **_enqueueUpdate_** 方法中引出了一个关键的对象 —— **_batchingStrategy_** ，该对象所具备的 **_isBatchingUpdates_** 属性直接决定了当下是要走更新流程，还是应排队等待；如果轮到执行，就调用**_batchedUpdates_** 方法来直接发起更新流程。由此可推测，**_batchingStrategy_** 或许正是 React 内部专门用于管控批量更新的对象

```js
function enqueueUpdate(component) {
  ensureInjected();
  // 注意这一句是问题的关键，isBatchingUpdates标识着当前是否处于批量创建/更新组件的阶段
  if (!batchingStrategy.isBatchingUpdates) {
    // 若当前没有处于批量创建/更新组件的阶段，则立即更新组件
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }
  // 否则，先把组件塞入 dirtyComponents 队列里，让它“再等等”
  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;
  }
}
```

**注意**：batchingStrategy 对象可以理解为“锁管理器”。这里的“锁”，是指 React 全局唯一的 isBatchingUpdates 变量，isBatchingUpdates 的初始值是 false，意味着“当前并未进行任何批量更新操作”。每当 React 调用 batchedUpdate 去执行更新动作时，会先把这个锁给“锁上”（置为 true），表明“现在正处于批量更新过程中”。当锁被“锁上”的时候，任何需要更新的组件都只能暂时进入 dirtyComponents 里排队等候下一次的批量更新，而不能随意“插队”。此处体现的“任务锁”的思想，是 React 面对大量状态仍然能够实现有序分批处理的基石。

#### **2. setState 调用之后发生了什么？是同步还是异步？**

**（1）setState 调用之后发生了什么**

- 在代码中调用 **_setState_** 函数之后，**_React_** 会将传入的参数对象与当前的状态合并，然后触发调和过程（**Reconciliation**）。经过调和过程，**_React_** 会以相对高效的方式根据新的状态构建 **_React_** 元素树，并且着手重新渲染整个 UI 界面。
- 在 **_React_** 得到元素树之后，**_React_** 会计算出新的树与老的树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中 **_React_** 能够相对精确的知道哪些位置发生了改变以及该如何改变，这就保证了按需更新，而不是全部重新渲染。
- 如果在短时间内频繁 **_setState_**，**_React_** 会将**state**的改变压入栈中，在合适的时机批量更新**state**和视图，达到提高性能的效果

**（2）setState 是同步还是异步**

假如 **_setState_** 是同步的，意味着每执行一次 **_setState_** 时（有可能一个同步代码中，多次 **_setState_** ），都重新 **vnode diff + dom** 修改，这对性能来说是极为不好的。如果是异步，则可以把一个同步代码中的多个 **_setState_** 合并成一次组件更新。所以默认是异步的，但是在一些情况下是同步的。

**_setState_** 并不是单纯同步/异步的，它的表现会根据调用场景的不同而不同。在源码中，通过 **_isBatchingUpdates_** 来判断 **_setState_** 是先存进 **state** 队列还是直接更新，如果值为 **true** 则执行异步操作，如果值为 **false** 则直接更新。

- **异步**：在 **React 可以控制** 的地方，就为 **true**， 比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
- **同步**：在 **React 无法控制** 的地方，比如原生事件，具体就是在 **addEventListener 、setTimeout、setInterval** 等事件中，就只能同步更新。

一般认为，做异步设计是为了性能优化，减少渲染次数：

- **_setState_** 设计为异步，可以显著提高性能。如果每次调用 **_setState_** 都进行一次更新，那么意味着 **render** 函数会被频繁调用，界面重新渲染，这样效率会很低的；最好的办法就是获得多个更新，之后进行一次更新。
- 如果同步更新了 **state** ，但是还没有执行 **render** 函数，那么 **state** 和 **props** 不能保持同步。**state** 和 **props** 不能保持一致性，开发中会出现很多问题。

#### **3. setState 批量更新的过程是真么？**

调用 **_setState_** 时，组件的 **state** 并不会立即改变，**_setState_** 只是把要修改的 **state** 放入一个队列中，**React** 会优化真正的执行时机，并出去性能原因，会将 **React** 事件处理程序中的多次 **_setState_** 状态修改合并成一次状态修改。最终更新只会产生一次组件的重新渲染，这对于大型应用中的性能提升至关重要。

```js
this.setState({
  count: this.state.count + 1    ===>    入队，[count+1的任务]
});
this.setState({
  count: this.state.count + 1    ===>    入队，[count+1的任务，count+1的任务]
});
                                          ↓
                                         合并 state，[count+1的任务]
                                          ↓
                                         执行 count+1的任务
```

**注意 ⚠️**：只要同步代码还在执行， 攒起来这个动作就不会停止。⬆️ 例子中多次 + 1 ，最终只有一次生效是因为在同一个方法中多次 **_setState_** 的合并动作并不是单纯的将更新累加。比如这里对于相同属性的设置，**React** 这里只会为其保留最后一次的更新。

#### **4. getDefaultProps 怎么使用，有什么作用？**

通过实现组件的 **getDefaultProps** ，对属性设置默认值（ES5 的写法）。

```jsx
var ShowTitle = React.createClass({
  getDefaultProps: function () {
    return {
      title: "React",
    };
  },
  render: function () {
    return <h1>{this.props.title}</h1>;
  },
});
```

#### **5. setState 的第二个参数作用是什么？**

**_setState_** 的第二个参数是一个可选的回调参数。这个回调函数将在组件渲染后执行。等价于在 **componentDidUpdate** 生命周期内执行。通常建议使用 **componentDidUpdate** 来代替此参数。在回调函数中你可以拿到更新后的 **state** 的值：

```js
this.setState({
  key1: newState1,
  key2: newState2,
  ...
}, callback) // 第二个参数是 state 更新完成后的回调函数
```

#### **6. setState 和 replaceState 的区别是什么？**

**(1) setState**

**_setState_** 用于设置状态对象

```js
setState(object nextState[, function callback])
```

- **nextState**: 将要设置的新状态，该状态会和当前的 state 合并
- **callback**: 可选参数，回调函数。该函数会在 setState 设置成功，且组件重新渲染后调用。

合并 **nextState** 和当前 **state**，并重新渲染组件。**setState** 是 **React** 事件处理函数中和请求回调函数中触发 UI 更新的主要方法。

**(2) replaceState**

**_replaceState()_** 方法与 **_setState()_** 类似，但是方法只会保留 **nextState** 中状态，原 **state** 不在 **nextState** 中的状态都会被删除。

```js
replaceState(object nextState[, function callback])
```

- **nextState** :将要设置的新状态，该状态会替换当前的 state。
- **callback** : 可选参数，回调函数。该函数会在 replaceState 设置成功，且组件重新渲染后调用。

**总结：** **_setState_** 是修改其中的部分状态，相当于 **_Object.assign_** ，只是覆盖，不会减少原来的状态。而 **_replaceState_** 是完全替换原来的状态，相当于赋值，将原来的 **state** 替换为另一个对象，如果新状态属性减少，那么 **state** 中就没有这个状态了。

#### **7. 组件的 this.state 和 this.setState 有什么区别？**

**this.state** 通常是用来初始化 **state** 的，**this.setState** 是用来修改 **state** 值的。如果初始化了 **state** ，再使用 **this.state** ，之前 **state** 的值是会被覆盖，如果使用 **this.setState** ，只会替换掉相应的 **state**。所以如果想修改 **state** 的值，必须使用 **this.setState** ，直接修改 **state** 之后页面是不会刷新的。

#### **8. 组件的 state 和 props 有什么区别？**

- **props** ：是一个从外部传进组件的参数，主要作用就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的 **props** 来重新渲染子组件，否则子组件的 **props** 以及展现形式不会改变。
- **state** ：主要作用用于组件保存、控制以及修改自己的状态，它只能在 **constructor** 中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的 **this.setState** 来修改，修改 **state** 会导致组件的重新渲染
- **区别** ：
  - **props** 是传递给组件的（类似于函数的形参），而 **state** 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。
  - **props** 是不可修改的，所有 **React** 组件都必须像纯函数一样保护它们的 **props** 不被更改。
  - **state** 是在组件中创建的，一般在 **constructor** 中初始化 **state** 。**state** 是多变的、可以修改，每次 **setState** 都异步更新的。

#### **9. props 为什么是只读的？**

**_this.props_** 是组件之间沟通的一个接口，原则上讲，它只能父组件流向子组件。**React** 具有浓重的函数式编程的思想。
函数式编程有一个特别的概念：**_纯函数_**

- 给定相同的输入，总是返回相同的输出
- 过程没有副作用
- 不依赖外部状态

**_this.props_** 就是吸取了纯函数的思想，**props** 的不可变性就保证了相同的输入，页面显示的内容是一样的，并且不会产生副作用

#### **10. 组件的 props 改变时更新组件的有哪些方法？**

在一个组件传入的 **props** 更新时重新渲染该组件常用的方法是在 **_componentWillReceiveProps_** 中将新的 **props** 更新到组件的 **state** 中（这种 **state** 被成为派生状态（ **Derived State** ），从而实现重新渲染。React 16.3 中还引入了一个新的钩子函数 **getDerivedStateFromProps** 来专门实现这一需求。

**（1）componentWillReceiveProps（已废弃）**

在 react 的 **_componentWillReceiveProps(nextProps)_** 生命周期中，可以在子组件的 **render** 函数执行前，通过 **this.props** 获取旧的属性，通过 **nextProps** 获取新的 **props**，对比两次 **props** 是否相同，从而更新子组件自己的 **state**。

这样的好处是，可以将数据请求放在这里进行执行，需要传的参数则从 **_componentWillReceiveProps(nextProps)_** 中获取。而不必将所有的请求都放在父组件中。于是该请求只会在该组件渲染时才会发出，从而减轻请求负担。

**（2）getDerivedStateFromProps（16.3 引入）**

这个生命周期函数是为了替代 **_componentWillReceiveProps_** 存在的，所以在需要使用 **_componentWillReceiveProps_** 时，就可以考虑使用 **_getDerivedStateFromProps_** 来进行替代。

两者的参数是不相同的，而 **_getDerivedStateFromProps_** 是一个静态函数，也就是这个函数不能通过 **_this_** 访问到 **class** 的属性，也并不推荐直接访问属性。而是应该通过参数提供的 **nextProps** 以及 **prevState** 来进行判断，根据新传入的 **props** 来映射到 **state**。

需要注意的是，如果 **props** 传入的内容不需要影响到你的 **state**，那么就需要返回一个 **null**，这个返回值是必须的，所以尽量将其写到函数的末尾：

```jsx
static getDerivedStateFromProps(nextProps, prevState) {
    const {type} = nextProps;
    // 当传入的type发生变化的时候，更新state
    if (type !== prevState.type) {
        return {
            type,
        };
    }
    // 否则，对于state不进行任何操作
    return null;
}
```

#### **11. 怎么检验 props？验证 props 的目的是什么？**

**React** 为我们提供了 **_PropTypes_** 以供验证使用。当我们向 **Props** 传入的数据无效（向 **Props** 传入的数据类型和验证的数据类型不符）就会在控制台发出警告信息。它可以避免随着应用越来越复杂从而出现的问题。并且，它还可以让程序变得更易读。

```jsx
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
```

如果项目中使用了 **TypeScript**，那么就可以不用 **PropTypes** 来校验，而使用 **TypeScript** 定义 **_接口_** 来校验 **props**。

#### **12. state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程**

通过 **_connect_** 和 **_mapStateToProps_** 将 **state** 注入到组件中

```jsx
import { connect } from "react-redux";
import { setVisibilityFilter } from "@/reducers/Todo/actions";
import Link from "@/containers/Todo/components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
```

上面代码中，**active** 就是注入到 **Link** 组件中的状态。 **_mapStateToProps（state，ownProps）_** 中带有两个参数，含义是 ∶

- **state-store** 管理的全局状态对象，所有都组件状态数据都存储在该对象中。
- **ownProps** 组件通过 **props** 传入的参数。

**reducer 到组件经历的过程：**

- **reducer** 对 **action** 对象处理，更新组件状态，并将新的状态值返回 **store**。
- 通过 **connect（mapStateToProps，mapDispatchToProps）（Component）** 对组件 **Component** 进行升级，此时将状态值从 **store** 取出并作为 **props** 参数传递到组件。

**高阶组件实现源码 ∶**

```jsx
import React from "react";
import PropTypes from "prop-types";

// 高阶组件 contect
export const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends React.Component {
      // 通过对context调用获取store
      static contextTypes = {
        store: PropTypes.object,
      };

      constructor() {
        super();
        this.state = {
          allProps: {},
        };
      }

      // 第一遍需初始化所有组件初始状态
      componentWillMount() {
        const store = this.context.store;
        this._updateProps();
        store.subscribe(() => this._updateProps()); // 加入_updateProps()至store里的监听事件列表
      }

      // 执行action后更新props，使组件可以更新至最新状态（类似于setState）
      _updateProps() {
        const store = this.context.store;
        let stateProps = mapStateToProps
          ? mapStateToProps(store.getState(), this.props)
          : {}; // 防止 mapStateToProps 没有传入
        let dispatchProps = mapDispatchToProps
          ? mapDispatchToProps(store.dispatch, this.props)
          : {
              dispatch: store.dispatch,
            }; // 防止 mapDispatchToProps 没有传入
        this.setState({
          allProps: {
            ...stateProps,
            ...dispatchProps,
            ...this.props,
          },
        });
      }

      render() {
        return <WrappedComponent {...this.state.allProps} />;
      }
    }
    return Connect;
  };
```

### **_三. 生命周期_**

#### **1. React 的生命周期有哪些？**

**React** 通常将组件生命周期分为三个阶段

- 装载阶段（ **_Mount_** ），组件第一次在 **DOM** 树中被渲染
- 更新过程（ **_Update_** ），组件状态发生改变，重新更新渲染的过程
- 卸载过程（ **_Unmount_** ），组件从 **DOM** 树中被移除的过程
  ![React 生命周期](../../assets/react-szq.png)

**1）组件挂载阶段**

挂载阶段组件被创建，然后组件实例插入到 **DOM** 中，完成组件的第一次渲染，该过程只会发生一次，在此阶段会依次调用以下这些方法：

- **constructor**
- **getDerivedStateFromProps**
- **render**
- **componentDidMount**

**分析**

- **constructor**

  组件的构造函数，第一个被执行，若没有显式定义它，会有一个默认的构造函数，但是若显式定义了构造函数，我们必须在构造函数中执行 **super(props)**，否则无法在构造函数中拿到 **_this_**。

  如果不初始化 **state** 或不进行方法绑定，则不需要为 **React** 组件实现构造函数 **_Constructor_**。

  **constructor** 只做两件事：

  - 初始化组件的 **state**
  - 给事件处理方法绑定 **this**

  ```js
  constructor(props) {
    super(props);
    // 不要在构造函数中调用 setState，可以直接给 state 设置初始值
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  ```

- **getDerivedStateFromProps**

  ```js
  static getDerivedStateFromProps(props, state)
  ```

  这是个静态方法，所以不能在这个函数里使用 **this**，有两个参数 **props** 和 **state**，分别指接收到的新参数和当前组件的 **state**对象，这个函数会返回一个对象用来更新当前的 **state** 对象，如果不需要更新可以返回 **null**。

  该函数会在装载时，接收到新的 **props** 或者调用了 **setStat**e 和 **forceUpdate** 时被调用。如当接收到新的属性想修改 **state** ，就可以使用。

  ```jsx
  // 当 props.counter 变化时，赋值给 state
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (props.counter !== state.counter) {
        return {
          counter: props.counter,
        };
      }
      return null;
    }

    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <div>
          <h1 onClick={this.handleClick}>Hello, world!{this.state.counter}</h1>
        </div>
      );
    }
  }
  ```

  现在可以显式传入 counter ，但是这里有个问题，如果想要通过点击实现 state.counter 的增加，但这时会发现值不会发生任何变化，一直保持 props 传进来的值。这是由于在 React 16.4^ 的版本中 **setState** 和 **forceUpdate** 也会触发这个生命周期，所以当组件内部 state 变化后，就会重新走这个方法，同时会把 state 值赋值为 props 的值。因此需要多加一个字段来记录之前的 props 值，这样就会解决上述问题。具体如下：

  ```jsx
  // 这里只列出需要变化的地方
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // 增加一个 preCounter 来记录之前的 props 传来的值
        preCounter: 0,
        counter: 0,
      };
    }
    static getDerivedStateFromProps(props, state) {
      // 跟 state.preCounter 进行比较
      if (props.counter !== state.preCounter) {
        return {
          counter: props.counter,
          preCounter: props.counter,
        };
      }
      return null;
    }
    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <div>
          <h1 onClick={this.handleClick}>Hello, world!{this.state.counter}</h1>
        </div>
      );
    }
  }
  ```

- **render**

  **_render_** 是 React 中最核心的方法，一个组件中必须要有这个方法，它会根据状态 state 和属性 props 渲染组件。这个函数只做一件事，就是返回需要渲染的内容，所以不要在这个函数内做其他业务逻辑，通常调用该方法会返回以下类型中一个：

  - **React 元素** : 这里包括原生的 DOM 以及 React 组件
  - **数组和 Fragment（片段）** : 可以返回多个元素
  - **Portals（插槽）** : 可以将子元素渲染到不同的 DOM 子树种
  - **字符串和数字** : 被渲染成 DOM 中的 text 节点
  - **布尔值或 null** : 不渲染任何内容

- **componentDidMount**

  **_componentDidMount()_** 会在组件挂载后（插入 DOM 树中）立即调。该阶段通常进行以下操作：

  - 执行依赖于 DOM 的操作
  - 发送网络请求；（官方建议）
  - 添加订阅消息（会在 componentWillUnmount 取消订阅）

  如果在 **_componentDidMount_** 中调用 **_setState_** ，就会触发一次额外的渲染，多调用了一次 **_render_** 函数，由于它是在浏览器刷新屏幕前执行的，所以用户对此是没有感知的，但是应当避免这样使用，这样会带来一定的性能问题，尽量是在 **constructor** 中初始化 **state** 对象。

  在组件装载之后，将计数数字变为 1：

  ```jsx
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    componentDidMount() {
      this.setState({
        counter: 1,
      });
    }
    render() {
      return <div className="counter">counter值: {this.state.counter}</div>;
    }
  }
  ```

**2）组件更新阶段**

当组件的 **props** 改变了，或组件内部调用了 **_setState/forceUpdate_**，会触发更新重新渲染，这个过程可能会发生多次。这个阶段会依次调用下面这些方法：

- **_getDerivedStateFromProps_**
- **_shouldComponentUpdate_**
- **_render_**
- **_getSnapshotBeforeUpdate_**
- **_componentDidUpdate_**

### **_四. 组件通信_**

#### **1. 父子组件的通信方式**

- 父组件向子组件通信：**父组件通过 props 向子组件传递需要的信息**

```jsx
// 子组件
const Child = (props) => <span>{props.name}</span>;
// 父组件
const Parent = () => <Child name="react" />;
```

- 子组件向父组件通信：**props + 回调函数方式传递信息**

```jsx
// 子组件
const Child = (props) => {
  const cb = (info) => props.callback(info);
  return <span onClick={() => cb("hi")}>{props.name}</span>;
};
// 父组件
const Parent = () => {
  const callback = (info) => {
    console.log(info); // hi
  };
  return <Child name="react" callback={callback} />;
};
```

#### **2. 跨级组件的通信方式**

父组件向子组件的子组件传递信息

- 使用 **_props_**，利用中间组件层层传递，但是如果父组件结构较深，那么中间每一层组件都要去传递 props，增加了复杂度，并且这些 props 并不是中间组件需要的
- 使用 **_context_**，context 相当于一个大容器，可以把要通信的内容放在容器中，这样不管嵌套多深，都可以随意取用，对于跨越多层的全局数据可以使用 context 实现

[context 实现组件通信原理](../react/context.md)

#### **3. 非嵌套关系组件的通信方式**

**非嵌套关系组件**是指没有任何包含关系的组件，包括兄弟组件以及不在同一个父级组件中的非兄弟组件

- 可以通过自定义事件通信（发布订阅模式）
- 可以通过 Redux 等进行全局状态管理
- 如果是兄弟组件通信，可以找到这两个兄弟节点共同的父节点，结合父子组件的通信方式进行通信

#### **4. 如何解决 props 层级过深的问题**

- 使用 **context API** ：提供一种组件之间的状态共享，而不必通过显式组件树逐层传递 **props**
- 使用 **Redux** 等状态库

#### **5. 组件通信的方式有哪些**

- **父组件向子组件通信**：父组件可以向子组件通过**_props_**的方式，向子组件通信
- **子组件向父组件通信**：**_props+回调函数_**的方式，父组件向子组件传递**props**进行通讯，次**props**作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数传递给父组件
- **兄弟组件通信**： 找到这两个兄弟节点共同的父节点，结合上面的两种方式由父节点转发信息进行通信
- **跨层级通信**：**_Context_**设计目的是为了共享那些对于一个组件树而言是**全局**的数据，例如当前认证用户、主题或首选语言、对于跨越多层的全局数据通过**Context**通信再适合不过
- **发布订阅模式**：发布者发布事件，订阅监听事件并做出反应，我们可以引入 **event**模块进行通信
- **全局状态管理工具**：借助**_Redux_**或**_Mobx_**等全局状态管理工具进行通信，这种工具会维护一个全局中心的**_Store_**，并根据不同的事件产生新的状态

### **_五. 路由_**

### **_六. Redux_**

### **_七. Hooks_**

### **_八. 虚拟 DOM_**

### **_九. 其他_**
