// pages/input/button.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "username": "lzc",
    "userinfo": {"age":"23"},
    "sex":['男','女']
  },
  submit:function(e){
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad(options) {
    console.log("页面只会渲染一次load");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("页面ready");
    // console.log(app.globalData);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // this.setData({
    //   "username": "刘德华"
    // });
    this.data.username = "黎明" //这个不会改视图的内容，上面会一起改
    console.log("页面show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("页面hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("页面unload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      "title": "hello lzc"
    }
    console.log("button 分享")
  }
})