# 内存控制

## 为什么要关注内存？

- JavaScript的应用场景已经延展到了服务端
- 充分理解语言特性和运作机理

## v8的内存限制

- 一般后端语言基本没有内存上的限制，v8确只能运行JavaScript使用部分系统内存
- 比如：64位系统下约为1.4GB，32位系统下约为0.7GB，其实都不一样，你去chrome看看？
- 在v8中所有JavaScript的对象都是通过堆来分配内存的

## 查看node中的内存状况

```javascript
// memory.js

process.memoryUsage();

// console.log(performance.memory);

console.log({
  // Resident Set Size，即进程常驻内存
  // 包括了stack、head、code segment
  rss: 23027712,
  
  // v8相关内存
  // 堆里存放的是objects、strings、closures
  // Variables 存在stack里
  // 实际可执行JavaScript代码存在code segment里
  heapTotal: 9682944, // 已申请到的堆内存
  heapUsed: 5809848, // 已经使用的堆内存
  // jsHeadSizeLimited: xxxx
  
  external: 8770 // v8管理的绑定到JavaScript对象上的c++对象内存
});
```

## v8垃圾回收机制

https://juejin.im/post/5cf3958ef265da1bad56ee3d

## 怎么避免

- 使用WeakMap、WeakSet
- 合理使用缓存
- 合理使用闭包
- 避免全局对象