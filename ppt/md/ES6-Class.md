# class

## es6 写法

```JavaScript
class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	bark() {
		alert('汪汪汪');
	}
}
```

## es5 写法


```JavaScript
var Dog = function(name, age) {
	this.name = name;
	this.age = age;
}

Dog.prototype.bark = function() {
	alert('汪汪汪');
}
```

### 区别与相同

- 构造方法都是指向类自身的,即`Dog === Dog.prototype.constructor`
- es6规定都要有`constructor`方法，没有会默认添加一个空的，返回this
- 方法都是在`prototype`上的，属性在实例上
- es6 `class`一定要用new，否则会报`TypeError`。es5这样做不会有报错
- `class`不存在变量提升，记得提前声明
- 都可以`getter` `setter`，参考`proxy`

## 私有属性和方法

```JavaScript
class Dog {
	static util() {
		return 'some utils';
	}

	constructor(name, age) {
		this._name = name; // 并不私有
		this[Symbol('age')] = age;
		
		const savedName = name;
		
		this.getName = () => { return savedName; }
	}
	
	_bark() {}
	
	[Symbol('bite')]() {} // why
	
	#run() {
		// 提案  babel7支持
	}
	
	// WeakMap也可以
}
```

但都是可以查到

```JavaScript
var dog = new Dog('keji', 3);

aa._name; // ==> reach _name

Object.keys(Dog.prototype); // ===> reach _bark? no 不可枚举

Object.getOwnPropertyNames(Dog.prototype); // ===> reach _bark & constructor

Object.getOwnPropertySymbols(Dog.prototype); // ===> ['Symbol(bite)']

Object.getOwnPropertyNames(Dog); // ===> reach util
```

## 继承

```JavaScript
class KeJi extends Dog {
	static subUtil() {
		super.util();
	}
	
	// static legLegth: 3  not work
	
	// 提案
	static leg2 = 3; // 构造方法上
	leg3 = 4; // 实例上
	
	constructor(...args) {
		super(...args);
		
		this.isShortLeg = true;
	}
}

KeJi.legLength = 3;


function extend(subClass, superClass) {
    //1.叫子类原型类属性等于父类的原型属性
    //初始化一个中间空对象,为了转换主父类关系
    var F = function () {
    };
    F.prototype = superClass.prototype;
    //2.让子类继承F
    subClass.prototype = new F();
    //使用自身的构造方法
    subClass.prototype.constructor = subClass;
    //3.为子类增加属性superClass
    subClass.superClass = superClass.prototype;
    //4.增加一个保险,就算你是的原型类是超类(Object) 那么也要把你的构造函数级别降下来
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
    return this;
}
```

- 子类static中的`super`指父类构造方法
- ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

## __\__proto__\__

```JavaScript
class PA {}

class PB extends PA {}

PB.__proto__ === PA; // true
PB.prototype.__proto__ === PA.prototype;
```

## static

定义一个工具类

## 关于class内部this指向问题

- 子类继承时，没有`super`会怎样
- 空`constructor`，要写上去，就不要忘了`super()`
- 绑定this
	- `this.fn = this.fn.bind(this);` 
	- `this.fn = () => { // do something };` // 箭头函数会自动self
	- `proxy绑定`


## generator

```JavaScript
class Gen {
	* loop() {
		// ...
	}
}
```