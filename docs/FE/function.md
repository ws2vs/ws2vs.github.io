# 纯函数

纯函数的定义是指：对于相同的输入，永远会等到相同的结果，  
而且没有任何可观察的副作用，也不依赖于外部环境的状态。

    > y = f(x) 函数的输出是由输入来决定的。

------
## 举个例子，判断纯不纯

```javascript
// 纯
const testArr = [1, 2, 3];
testArr.slice(0, 2); // => [1, 2]
testArr.slice(0, 2); // => [1, 2]

// 不纯
const testArr2 = [1, 2, 3];
testArr2.splice(0, 2); // => [1, 2]
testArr2.splice(0, 2); // => [3]
```

------

- 可以做缓存
    - 比如`memoize-one`只缓存了最后一次的参数
    
------

对于外部依赖的，看起来纯，实则不纯

```javascript
const MAX = 5;

function isLargerThanMax(num) {
    return num > MAX;
}

// 看起来所有的输出值都由输入值决定，但是函数内部有对外部的依赖
isLargerThanMax(3);

```

可以简单的使用`柯里化`来解决

```javascript
// 将外部变量通过参数的形式，传入函数内部
// 再由函数返回一个函数
// 将多个参数细化、拆分
function isLargerThanSomeNumber(maxNum) {
  return function(compareNum) {
    return compareNum > maxNum;
  }
}

const isLargerThanMax5 = isLargerThanSomeNumber(5);

isLargerThanMax5(3);
```