# 介绍微信小程序

## 大纲

* what
	* 什么是小程序
	* 巴拉巴拉一堆文章
	* 。。
* why
	* 微信为什么要做小程序
	* 携程为什么要做
* how
	* 微信是怎么做的
	* 鞋厂是怎么做的
* 简单介绍微信的开发流程
* 简单介绍订单微信小程序，以及鞋厂总app开发的流程
* 一些坑
* 深入一个点，随便挑
	* 可以是编译加壳
	* 可以是diff算法，渲染
	* 可以是语法

## 详细介绍

### 第一列，分三块
* title
* 简单介绍 what why how
* 贴一些介绍文章，好的文章

#### 1，title
wechat app  
shallow in(Head) shallow out(First)

#### 2，简单介绍
##### 2.1 what
什么是微信小程序，官方给出的话术：微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。  

- 微信小程序，还在内测中，叫法不同，也有叫应用号的，而且入口在哪还没正式确定
- 连接用户与服务的方式，个人理解。微信用户是个庞大的用户群，微信提供了一个天然的好平台，一个巨大的流量坑。而携程就是一种服务，而小程序就是这两者之间的方式
- 获取和传播，不同于appstore和google play上的应用。从安装，审核，下载，大小上，微信小程序都明显是可以一战原生app的。
- 出色的使用体验，套了native的壳，感觉还是完胜hybrid。。。。

##### 2.2 why
1，现状：原生app，微信服务号，订阅号。原生app繁琐的迭代，发布，审核，下载，安装。原生服务号订阅号，h5，体验不佳，依赖网络。小程序say no  
2，微信想搞个生态。参考苹果appstore生态。有共同的统一入口，开发者和运营者共赢，运营者提供统一规范，独立语言。其他好处，既不是h5，也不是hybrid，体验棒。没有心理压力，不需要关注，不需要下载安装（吐槽国内安卓市场），成本低。

#### 3，一些文章
http://mp.weixin.qq.com/s?__biz=MjM5ODQwMjA4MA==&mid=2649293661&idx=1&sn=cfa57f34aee709690f70993a3942e8f1&chksm=bed6e21289a16b04806dcdc22065d682deb3cf26719ca3c607ad9e7a4d053b761402abe8a8dd&mpshare=1&scene=1&srcid=1103EQ4QKTLQGUI1gnhghQo6#rd

http://mp.weixin.qq.com/s?__biz=MjM5ODIyMTE0MA==&mid=2650968689&idx=1&sn=c27c74226fe4d500ff552abc46b62812&chksm=bd38364a8a4fbf5ca2fd32caa15799a160e90295abc56a1b874d8ce14c85614b32a2cb846291&mpshare=1&scene=1&srcid=0921W3kvrloccYXarUJMtyXe#rd

https://www.zhihu.com/question/50875544

### 第二列
* 怎么开发
* 订单是怎么开发的

### 第三列
* 深入研究
