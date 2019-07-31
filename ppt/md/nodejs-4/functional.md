# 4 异步编程

## 函数式编程

- 高阶函数
- 偏函数

### 高阶函数

函数可以接受函数作为参数，并且可以将函数作为范围值返回，这类函数称之为`高阶函数`

### 所以我还是不知道什么是函数式编程

    函数式编程(functionial programming)或成为函数程序设计、泛函编程，是一种编程范式 -- wiki  
    
----

	编程范型、编程范式或程序设计法(Programming paradigm)，是一类典型的编程风格。如函数式编程(Haskell)、面向对象编程(Java)、指令式编程

### 现象

- 函数式编程随便从网上搜索，很少有能讲清它是什么，它有什么优缺点，以及它怎么用
- 它很火，12年有人说它很火，19年也有人说它很火

有个东西可以炸一炸  
[如何评价阮一峰老师的函数式编程/范畴论教程？](https://www.zhihu.com/question/278267469)  

### 在nodejs中

- 使用高阶函数
- 将业务重点从返回值转移到了回调函数中
- 使用事件模块

### 偏函数

	偏函数用法是指创建一个调用另外一个部分(参数或变量已经预置的函数)的函数的用法。
	
```javascript
const toString = Object.prototype.toString;

const isString = obj => toString.call(obj) === '[object String]';

console.log(isString('321'));

const isFunction = obj => toString.call(obj) === '[object Function]';

console.log(isFunction(() => {}));

const isType = type => obj => toString.call(obj) === `[object ${type}]`

const _ = {
    isFunction: isType('Function'),
    isString: isType('isString')
};

console.log(_.isFunction(() => {}));
```


### 偏函数和函数柯里化

	函数柯里化（functioncurrying），它用于创建已经设置好了一个或多个参数的函数。
	
```typescript
const getSize = (x: number, y: number, z: number): number => x * y * z;

const size1 = getSize(1, 2, 3);
const size2 = getSize(1, 3, 3);

const getNewSize = (z: number) => (y: number) => (x: number) => x * y * z;

const getZ3Size = getNewSize(3);

getZ3Size(2)(1);
getZ3Size(3)(1);
```

- 偏函数解决这样的问题：如果我们有函数是多个参数的，我们希望能固定其中某几个参数的值。
- 函数柯里化是一种使用匿名单参数函数来实现多参数函数的方法。


### 参考资料

[函数式编程--wiki](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B)  
[编程范式](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%8C%83%E5%9E%8B)  
[lambda演算](https://zh.wikipedia.org/wiki/%CE%9B%E6%BC%94%E7%AE%97)  
[偏函数和函数柯里化](https://juejin.im/post/5ca862bce51d45534839ab96)  
[偏函数和函数柯里化2](https://cloud.tencent.com/developer/article/1084967)