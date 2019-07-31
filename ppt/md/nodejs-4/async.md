# 异步编程的优势与难点

## 优势

。。。

## 难点

### 异常处理

```javascript
const async = (callback) => {
    process.nextTick(callback);
};

try {
  async(callback);
} catch (e) {
  throw e;
}
```

这段代码是有问题的

- catch时没有执行回调函数
- `try catch`语句在这里没有意义(这里并不能捕获到callback中的异常)

异步编程的几个原则

- 必须执行调用这传入的回调函数
- 正确传递回异常供调用者判断
- 不要对回调函数进行异常捕获
    - 如果满足第一个原则，那么回调方法将被执行2次

```javascript
const async = (callback) => {
    process.nextTick(() => {
        try {
            // 自己的代码
            const ret = {};
            callback(null, ret);
        } catch (e) {
            callback(e, null);
        }
    });
};

async(callback);
```

### 函数嵌套过深(回调地狱)

```javascript

i18n.getLocale((locale) => {
    shark.getSharkMessage(locale, (message) => {
        l10n.getCurrencyFormat(message.currency, (ret) => {
            console.log(ret);
        });
    });
});

```

### 阻塞代码

nodejs并没有sleep线程这样的功能

粗暴的代码
```typescript
// 这段代码会对cpu有持续的占用
const start = new Date();
const sleep = (ms: number): void => {
    while (new Date() - start < ms) {
        // TODO
    } 
};

sleep(1000);
```

优雅的代码
```typescript
// 那这段呢？
const sleep = async (ms: number): Promise => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms)
})

const test = async (): Promise => {
    console.log(1);
    await sleep(1000);
    console.log(2);
};

test();
```

### 多线程编程

第9章会详细讲解

NodeJs借鉴了web workers，提供了`child_process`API， `Cluster`模块

### 异步转同步

- node从底层实现来提供了较多的同步API
- 语法糖包装