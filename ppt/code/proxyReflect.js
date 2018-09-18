// 基本代码
const target = {};
const handler = {
    get: (target, prop, receiver) => {
        console.log(`get ${prop}`);

        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // get name

// tips 1 & 2
const targetTip1 = { a: { b: 3 } };
const proxyTargetTips1 = new Proxy(targetTip1, {});

console.log(proxyTargetTips1.a === targetTip1.a); // true

// tip3
const date = new Date();
const proxyDate = new Proxy(date, {});

console.log(proxyDate.getTime()); // Uncaught TypeError: this is not a Date object.

// example 1
const tree = {};

tree.branch1.branch2.twig = 2;
// TypeError: Cannot read property 'branch2' of undefined

// how to solve this by using proxy

const treeHandler = {
    get: function (target, prop, receiver) {
        if (!(prop in target)) {
            target[prop] = new Tree1();
        }
        return Reflect.get(target, prop, receiver);
    }
};
const Tree1 = function () {
    return new Proxy({}, treeHandler);
};

const tree1Example = new Tree1();
tree1Example.branch1.branch2.twig = 3; // right!

// example 2
const NOPE = () => {
    throw new Error("can't modify read-only view");
};
const readOnlyHandler = {
    set: NOPE,
    defineProperty: NOPE,
    deleteProperty: NOPE,
    preventExtensions: NOPE,
    setPrototypeOf: NOPE
};
const getReadOnlyObj = target => new Proxy(target, readOnlyHandler);
const readOnlyTarget = {
    a: {
        b: 3
    },
    c: 4
};
const readOnlyObj = getReadOnlyObj(readOnlyTarget);

readOnlyObj.c = 5; // Uncaught Error: can't modify read-only view
readOnlyObj.a.b = 4; // right!

// revocable
const revocableTarget = {
    test: 'right'
};
const revocableHandler = {
    get: (...args) => {
        console.log('get');
        return Reflect.get(...args);
    }
};
const proxyRevocable = Proxy.revocable(revocableTarget, revocableHandler);
console.log(`%c ${proxyRevocable.proxy.test}`, 'color:green;font-size:30px;'); // right, and console get

proxyRevocable.revoke(); // 销毁

console.log(proxyRevocable.proxy.test); // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked