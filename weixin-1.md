# 1、app.json的全局配置；页面路由；
## 写法： { "a":"b", "c":["d", "e"], "f":{"sfa": "aaa"} }
## pages 页面路由，谁在第一个就是启动页面
## 窗口表现
## 网络超时时间
## 设置多tab等

# 2、局部配置：只能配置window的属性

# 3、组件
## wxss 类似css的样式表，决定wxml的组件应该怎么显示
### wxss比css多扩展了：尺寸单位、样式导入
#### 尺寸单位：rpx根据屏幕宽度自适应，1rpx = 0.5px = 1物理像素
#### 样式导入：@import "样式路径"

## 3-1 视图容器组件：view、scroll-view、swiper...
### view：理解为div，功能有多一些，属性多一些; 注意5个属性; view比较重要
### scroll-view：左右上下可视滚动页面
### swiper：滑动视图容器（轮播图）

## 3-2 基础组件
### icon progress rich-text text

## 3-3 表单组件
### navigator充当跳转链接，类似a标签

## 3-4 多媒体组件

## 3-5 地图组件

# 4、框架接口 - App() 注册小程序，相当小程序的入口，只能有一个；初始化的函数
## app()：全局初始函数
## page()：页面初始函数
### setData函数用于将数据从逻辑层发送到视图层(异步):经常用的

# 5、页面数据相关处理

# 6、wxs：理解为PHP的一个公共类；是内联在wxml的脚本段。可以丰富模版的数据预处理能力。还可以用来编写简单的事件响应函数
## 就是写了个module,然后export出去

# 7、API的使用：【最重要】【都有三个回调函数】

## 7-1 交互界面api 【注意this和that: 只要在回调函数里面就不能用this代表了】
### wx.showToast:显示消息提示框
### wx.hideToast:隐藏消息提示框
### wx.showLoading:显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
### wx.hideLoading:关闭loading
### wx.showModal：显示模态对话框

## 7-2 导航栏api
### wx.showNavigationBarLoading

## 7-3 路由api
### wx.navigateTo
### ...

## 7-4 数据缓存api
### wx.setStorage 存储
### wx.getStorage 获取数据
### wx.getStorageInfo 异步获取当前storage的相关信息,所有的key的信息
### wx.removeStorage 删除
### ...

## 7-5 设备、位置、系统的api
### wx.getLocation 获取位置
### wx.getSystemInfo 获取系统信息
### wx.getNetworkType 获取网络类型

## 7-6 媒体相关接口
### wx.chooseMedia 用这个代替上传图片
### wx.previewImage 预览图片
### wx.getImageInfo 获取图片信息

## 7-7 文件相关api
### FileSystemManager.saveFile 

## 7-8 网络请求request等api
### wx.request 发起https网络请求
### wx.uploadFile 上传文件
























