class GoodsItem {
  constructor(info) {
    this.good = info;
    this.num = 1;
  }

  // 获取该商品的总价
  getTotalPrice() {
    return this.good.price * this.num;
  }

  // 该商品是否被选择
  isChoose() {
    return this.num > 0;
  }

  // 单个商品递增
  increase() {
    this.num++;
  }
  // 单个商品递减
  decrease() {
    if (this.num === 0) {
      return;
    }
    this.num--;
  }
}

class GoodsList {
  constructor() {
    this.goods = goods.map(item => new GoodsItem(item));
    this.deliveryPrice = 5;
    this.deliveryStartLinePrice = 30;
  }

  // 获取全部商品价格
  getTotalPrice() {
    return this.goods.reduce((pre, cur) => {
      return pre + cur.getTotalPrice();
    }, 0)
  }

  // 获取全部商品数量
  getTotalNum() {
    return this.goods.reduce((pre, cur) => {
      return pre + cur.num;
    }, 0)
  }

  // 是否选择了商品
  isChoose(index) {
    return this.goods[index].isChoose();
  }

  // 递增某个商品
  increase(index) {
    this.goods[index].increase();
  }
  // 递减某个商品
  decrease(index) {
    this.goods[index].decrease();
  }
}


class Page {
  constructor() {
    this.data = new GoodsList();
    console.log(this.data);
    this.doms = {
      goodsContainer: document.querySelector('.goods-list'),
      badge: document.querySelector('.footer .footer-car-badge'),
    }

    this.createHtml();
  }
  createHtml() {
    let html = '';
    this.data.goods.map((good, index) => {
      html += `<div class="goods-item">
          <img src="${good.good.pic}" alt="" class="goods-pic" />
          <div class="goods-info">
            <h2 class="goods-title">${good.good.title}</h2>
            <p class="goods-desc">
            ${good.good.desc}
            </p>
            <p class="goods-sell">
              <span>月售 ${good.good.sellNumber}</span>
              <span>好评率${good.good.favorRate}%</span>
            </p>
            <div class="goods-confirm">
              <p class="goods-price">
                <span class="goods-price-unit">￥</span>
                <span>${good.good.price}</span>
              </p>
              <div class="goods-btns">
                <i class="iconfont i-jianhao" data-index="${index}"></i>
                <span>${good.num}</span>
                <i class="iconfont i-jiajianzujianjiahao" data-index="${index}"></i>
              </div>
            </div>
          </div>
        </div>`
    })

    this.doms.goodsContainer.innerHTML = html;
  }


  // 递增某个商品
  increase(index) {
    this.data.goods[index].increase();
    this.doms.goodsContainer.children[index].classList.add('active');

    this.uodateGoodsItem();
  }
  // 递减某个商品
  decrease(index) {
    this.data.goods[index].decrease();
    if (!this.data.goods[index].isChoose()) {
      this.doms.goodsContainer.children[index].classList.remove('active');
    }

    this.uodateGoodsItem();
  }

  // 更新商品显示信息
  uodateGoodsItem(index) {
    const activeGoodsItem = this.doms.goodsContainer.children[index];
    if (this.data.goods[index].isChoose()) {
      activeGoodsItem.classList.add('active');
    } else {
      activeGoodsItem.classList.remove('active');
    }

    activeGoodsItem.querySelector('.goods-btns span').innerHTML = this.data.goods[index].num;
  }

}

const page = new Page();
page.doms.goodsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('i-jiajianzujianjiahao')) {
    console.log(e.target.dataset.index);
    page.increase(e.target.dataset.index);
  } else if (e.target.classList.contains('i-jianhao')) {
    page.decrease(e.target.dataset.index);
  }
})