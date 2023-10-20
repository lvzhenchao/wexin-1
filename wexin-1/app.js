// app.js
App({
  // 只会全局触发一次
  onLaunch:function(){
    console.log("app onlaunch");
  },

  onShow:function(){
    console.log("app onshow");
  },
  onHide:function(){
    console.log("app onhide");
  },
  onError:function(){
    console.log("app onerror");
  },
  // 全局变量
  globalData: 'I am global data'
})
