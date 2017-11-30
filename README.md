![](logo.png)

#  7种loading特效模块

**实现原因**:

  &emsp;很多情况下需要一个loading特效显示正在加载

**优点**:

  &emsp;1、易用

  &emsp;2、自适应

  &emsp;3、面向对象，支持多实例

  &emsp;4、支持7种可选效果

  &emsp;5、完美设计

**缺点**:

  &emsp;不存在的，因为它是完美的

## 获取和引用 osloading

**简单粗暴方式（必须首先提供的方式）**

  [`下载最新版本`](https://github.com/oscxc/osloading/releases) && 使用标签引用

```
<link rel="stylesheet" href="osloading.css">
<script src="osloading.js"></script>
```

**npm + CommonJS 方式**

```
npm install osloading
```

```
var osloading = require('osloading');
```

## Usage examples

```
var el = document.querySelector('.loading');
    var loading = new osloading({
        el:el,  //需要遮挡的元素
        type:2, //支持7种 1-7
        color:"#fe7f02", //loading动画的颜色
        backgroundColor:"#333", //背景色
        opacity:1  //背景透明度
    });
    loading.show(); // 显示
    setTimeout(function () {
        el.style.width = el.style.height = 600 + 'px';
    },2000);
    setTimeout(function () {
        loading.hide();  //隐藏
        //loading.remove();  //从页面上删除
    },4000);
```

## 查看演示
[`demo`](https://oscxc.github.io/osloading/)


## 联系我们

如有问题，欢迎加入下面QQ群

![](https://oscxc.github.io/Images/doc/contact.jpg)
