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

