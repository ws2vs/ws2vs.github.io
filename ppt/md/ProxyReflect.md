### 这个东西不好讲，先来聊聊`what is an object?`

三个方面

- Objects have properties. You can get and set properties, delete them, and so on.
- Objects have prototypes. This is how inheritance works in JS.
- Some objects are functions or constructors. You can call them.

Object会有一些基础的功能

参考[这14个](http://www.ecma-international.org/ecma-262/6.0/index.html#table-5)

用`[[]]`来表示这些属性是基本JS代码无法访问的

### so proxy

proxy就是为了使你有能力来替换这些无法访问的功能

### 基本操作

```JavaScript
var target = {}, handler = {};
var proxy = new Proxy(target, handler);

proxy.color = 'pink';
target.color // pink
```

几个tips

- 如果`handler`中没有指定`override`的内部方法，则指向原有的`target`，按原先的方式产生结果
- 若果`handler`为空，则`proxy`指向`target`，访问没有任何拦截效果
- 在使用`proxy`时，`this`指针的变化

几个栗子

```JavaScript
var tree = {};

tree.branch1.branch2.twig = 2; // TypeError: Cannot read property 'branch2' of undefined

// how to solve this by using proxy
```

```JavaScript
// how to make a read-only object

function NOPE() {
  throw new Error("can't modify read-only view");
}

var handler = {
  // Override all five mutating methods.
  set: NOPE,
  defineProperty: NOPE,
  deleteProperty: NOPE,
  preventExtensions: NOPE,
  setPrototypeOf: NOPE
};

function readOnlyView(target) {
  return new Proxy(target, handler);
}

var newHandler = {
	// Wrap other results in read-only views.
	get: function (target, key, receiver) {
    // Start by just doing the default behavior.
    var result = Reflect.get(target, key, receiver);
	
    // Make sure not to return a mutable object!
    if (Object(result) === result) {
      // result is an object.
      return readOnlyView(result);
    }
    // result is a primitive, so already immutable.
    return result;
  }
  // 其他get类似的，getPrototypeOf，getOwnPropertyDescriptor都需要做保护
}
```


```JavaScript
var target = new Date();
var handler = {
	get: function(...args) {
		console.log('you get');
		Reflect.get(...args);
	}
};
var proxy = new Proxy(target, handler);

proxy.getTime(); // Uncaught TypeError: proxy.getTime is not a function

proxy.getTime.call(target);
```

### revocable

可取销毁的proxy对象，一行代码

`const { proxy, revoke } = Proxy.revocable(target, handler);`

### reflect

- 和proxy配套使用
- 用Reflect来访问内部方法会更合适，以后也只能用它来访问
- 用Reflect有更好的稳定性和兼容性
- 命令式转函数式，如key in obj = Reflect.has(obj, key)


### 实例
参考[shark](https://www.trip.com/m/i18n/100012947/en_us.js)

参考文章[proxy](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/)