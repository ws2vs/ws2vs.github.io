### ArrayBuffer

## what!?

- 这个东西很早就存在了，只是es6将他纳入了规范
- 使JavaScript有能力直接操控计算机底层二进制数据
- 因为webGL项目中JavaScript需要和GPU进行通信，若用JavaScript的数据类型，那么GPU和JS进程之间就需要进行大量的实时翻译，将文本语言转换为二进制，或者反着来。

### 为什么叫ArrayBuffer

- ArrayLike
- easy control
- custom view api

### 名词解释
- bit（位） `1`or`0`
- byte（字节）`f`
- 8 bit = 1 byte
- ArrayBuffer = buffer
	- 直接存储数据
- TypedArray = view
- DataView = mutil view
	- 提供操控buffer的`能力`
- 几张图

### 哪里用？

- fetch webSocket
	- 解决爬虫中文乱码，responsetype：arraybuffer，解码
- file pic
	- gulp 文件流处理
- canvas webGL