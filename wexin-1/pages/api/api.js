// pages/api/api.js
Page({
  data:{
    ind:'',
    country: ['中国', '日本', '韩国'],
  },
  sub:function(){
    // wx.showToast({
    //   title: 'title',
    //   icon: 'loading',
    //   duration: 8000
    // })
    // setTimeout(function(){
    //   wx.hideToast()
    // }, 1000);

    // wx.showLoading({
    //   title: '加载中'
    // });
    // setTimeout(function(){
    //   wx.hideLoading()
    // }, 1000);

    // wx.showModal({
    //   title: '确定注册吗？？？',
    //   content: 'lampol',
    //   cancelText: '想一想',
    //   complete: (res) => {
    //     if (res.cancel) {
          
    //     }
    
    //     if (res.confirm) {
          
    //     }
    //   }
    // })

    var that = this;
    wx.showActionSheet({
      itemList: this.data.country,
      success: function(res){
        console.log(res);
        that.setData({ind: res.tapIndex})
      }
    })
  }
})