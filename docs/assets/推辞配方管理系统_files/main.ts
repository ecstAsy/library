import { createApp } from "/node_modules/.vite/deps/vue.js?v=9122bd2c";
import * as Icons from "/node_modules/.vite/deps/@element-plus_icons-vue.js?v=9122bd2c";
import router from "/src/router/index.ts?t=1664263245721";
import { store, key } from "/src/store/index.ts?t=1664263245721";
import App from "/src/App.vue";
import "/src/permission.ts?t=1664263245721";
import "/src/assets/font.js";
import "/src/styles/index.scss";
import "/node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-message.css";
import "/node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-message-box.css";
import "/node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-notification.css";
const app = createApp(App);
Object.keys(Icons).forEach((icon) => {
  app.component(icon, Icons[icon]);
});
app.config.globalProperties.$checkPermission = (value) => {
  const { userInfo } = store.state.user;
  let hasPermission = false;
  if (!value)
    return hasPermission;
  if (userInfo && userInfo.authdata.length && userInfo.authdata.includes(value)) {
    hasPermission = true;
  }
  return hasPermission;
};
app.directive("permission", {
  beforeMount(el, binding, vnode) {
    const { userInfo } = store.state.user;
    const { value } = binding;
    if (!value.length)
      return false;
    const flag = value.filter((v) => userInfo.authdata.includes(v)).length > 0;
    if (!flag) {
      const El = el;
      if (!el.parentNode) {
        El.style.display = "none";
      } else {
        El.parentNode.removeChild(el);
      }
    }
    return true;
  }
});
app.directive("debounce", {
  beforeMount(el, binding) {
    let timer = {};
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 300);
    });
  }
});
app.use(router).use(store, key).mount("#app");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Xb3JrU3BhY2UvdHVpY2ktcmVjaXBlL2NsaWVudC9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiQGVsZW1lbnQtcGx1cy9pY29ucy12dWVcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkAvcm91dGVyXCI7XG5pbXBvcnQgeyBzdG9yZSwga2V5IH0gZnJvbSBcIkAvc3RvcmVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xuXG5pbXBvcnQgXCIuL3Blcm1pc3Npb25cIjtcbmltcG9ydCBcIkAvYXNzZXRzL2ZvbnRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcImVsZW1lbnQtcGx1cy90aGVtZS1jaGFsay9lbC1tZXNzYWdlLmNzc1wiO1xuaW1wb3J0IFwiZWxlbWVudC1wbHVzL3RoZW1lLWNoYWxrL2VsLW1lc3NhZ2UtYm94LmNzc1wiO1xuaW1wb3J0IFwiZWxlbWVudC1wbHVzL3RoZW1lLWNoYWxrL2VsLW5vdGlmaWNhdGlvbi5jc3NcIjtcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCk7XG5cbk9iamVjdC5rZXlzKEljb25zKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gIGFwcC5jb21wb25lbnQoaWNvbiwgSWNvbnNbaWNvbiBhcyBrZXlvZiB0eXBlb2YgSWNvbnNdKTtcbn0pO1xuXG4vLyDmoKHpqozmmK/lkKbmnInmnYPpmZBcbmFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kY2hlY2tQZXJtaXNzaW9uID0gKHZhbHVlOnN0cmluZyk6Ym9vbGVhbiA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gc3RvcmUuc3RhdGUudXNlcjtcbiAgbGV0IGhhc1Blcm1pc3Npb246Ym9vbGVhbiA9IGZhbHNlO1xuICBpZiAoIXZhbHVlKSByZXR1cm4gaGFzUGVybWlzc2lvbjtcbiAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmF1dGhkYXRhLmxlbmd0aCAmJiB1c2VySW5mby5hdXRoZGF0YS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICBoYXNQZXJtaXNzaW9uID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaGFzUGVybWlzc2lvbjtcbn07XG4vLyDoh6rlrprkuYkgcGVybWlzc2lvbiDmjIfku6RcbmFwcC5kaXJlY3RpdmUoXCJwZXJtaXNzaW9uXCIsIHtcbiAgYmVmb3JlTW91bnQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBzdG9yZS5zdGF0ZS51c2VyO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGJpbmRpbmc7XG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBmbGFnID0gKHZhbHVlLmZpbHRlcigodjogc3RyaW5nKSA9PiB1c2VySW5mby5hdXRoZGF0YS5pbmNsdWRlcyh2KSkpLmxlbmd0aCA+IDA7XG4gICAgaWYgKCFmbGFnKSB7XG4gICAgICBjb25zdCBFbCA9IGVsO1xuICAgICAgaWYgKCFlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pO1xuLy8g6Ziy5oqWXG5hcHAuZGlyZWN0aXZlKFwiZGVib3VuY2VcIiwge1xuICBiZWZvcmVNb3VudCAoZWwsIGJpbmRpbmcpIHtcbiAgICBsZXQgdGltZXI6YW55ID0ge307XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmluZGluZy52YWx1ZSgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuYXBwLnVzZShyb3V0ZXIpXG4gIC51c2Uoc3RvcmUsIGtleSlcbiAgLm1vdW50KFwiI2FwcFwiKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUI7QUFDMUIsWUFBWSxXQUFXO0FBQ3ZCLE9BQU8sWUFBWTtBQUNuQixTQUFTLE9BQU8sV0FBVztBQUMzQixPQUFPLFNBQVM7QUFFaEIsT0FBTztBQUNQLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBTztBQUNQLE9BQU87QUFDUCxPQUFPO0FBRVAsTUFBTSxNQUFNLFVBQVUsR0FBRztBQUV6QixPQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQ25DLE1BQUksVUFBVSxNQUFNLE1BQU0sS0FBMkI7QUFDdkQsQ0FBQztBQUdELElBQUksT0FBTyxpQkFBaUIsbUJBQW1CLENBQUMsVUFBeUI7QUFFdkUsUUFBTSxFQUFFLFNBQVMsSUFBSSxNQUFNLE1BQU07QUFDakMsTUFBSSxnQkFBd0I7QUFDNUIsTUFBSSxDQUFDO0FBQU8sV0FBTztBQUNuQixNQUFJLFlBQVksU0FBUyxTQUFTLFVBQVUsU0FBUyxTQUFTLFNBQVMsS0FBSyxHQUFHO0FBQzdFLG9CQUFnQjtBQUFBLEVBQ2xCO0FBQ0EsU0FBTztBQUNUO0FBRUEsSUFBSSxVQUFVLGNBQWM7QUFBQSxFQUMxQixZQUFhLElBQUksU0FBUyxPQUFPO0FBRS9CLFVBQU0sRUFBRSxTQUFTLElBQUksTUFBTSxNQUFNO0FBQ2pDLFVBQU0sRUFBRSxNQUFNLElBQUk7QUFDbEIsUUFBSSxDQUFDLE1BQU07QUFBUSxhQUFPO0FBQzFCLFVBQU0sT0FBUSxNQUFNLE9BQU8sQ0FBQyxNQUFjLFNBQVMsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFHLFNBQVM7QUFDbkYsUUFBSSxDQUFDLE1BQU07QUFDVCxZQUFNLEtBQUs7QUFDWCxVQUFJLENBQUMsR0FBRyxZQUFZO0FBQ2xCLFdBQUcsTUFBTSxVQUFVO0FBQUEsTUFDckIsT0FBTztBQUNMLFdBQUcsV0FBVyxZQUFZLEVBQUU7QUFBQSxNQUM5QjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNGLENBQUM7QUFFRCxJQUFJLFVBQVUsWUFBWTtBQUFBLEVBQ3hCLFlBQWEsSUFBSSxTQUFTO0FBQ3hCLFFBQUksUUFBWSxDQUFDO0FBQ2pCLE9BQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUNqQyxVQUFJLE9BQU87QUFDVCxxQkFBYSxLQUFLO0FBQUEsTUFDcEI7QUFDQSxjQUFRLFdBQVcsTUFBTTtBQUN2QixnQkFBUSxNQUFNO0FBQUEsTUFDaEIsR0FBRyxHQUFHO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7QUFDRCxJQUFJLElBQUksTUFBTSxFQUNYLElBQUksT0FBTyxHQUFHLEVBQ2QsTUFBTSxNQUFNOyIsIm5hbWVzIjpbXX0=