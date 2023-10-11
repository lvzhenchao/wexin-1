// pages/api/api.js
Page({
  data:{
    ind:'',
    country: ['中国', '日本', '韩国'],
    img_url:''
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

    // var that = this;
    // wx.showActionSheet({
    //   itemList: this.data.country,
    //   success: function(res){
    //     console.log(res);
    //     that.setData({ind: res.tapIndex})
    //   }
    // })

    // wx.navigateTo({
    //   url: 'url',
    // })

    // wx.setStorage({
    //   key:"name",
    //   data:"lzc"
    // })

    // wx.getLocation({
    //   type: 'wgs84',
    //   success (res) {
    //     console.log(res);
    //   }
    //  })

    // wx.getSystemInfo({
    //   success: function(res){
    //       console.log(res)
    //   }
    // })

    // wx.getNetworkType({
    //   success: function(res){
    //     console.log(res);
    //   }
    // })

    const fs = wx.getFileSystemManager();
    var that = this;
    wx.chooseMedia({
      count: 20,
      success: function(res){
        console.log(res)
        var temp = res.tempFiles[0].tempFilePath;
        console.log(temp)
        fs.saveFile({
          tempFilePath: temp,
          success:function(res1){
            console.log(res1);
            that.setData({img_url: res1.savedFilePath})
          }
        })
      }
    })
    
     


  }
})