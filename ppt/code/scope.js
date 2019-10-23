// 作用域
const foo = () => {
    const local = {};
};

// local所在的作用域是foo方法，每当foo方法执行完毕后，local就随foo作用域的销毁而销毁

const foo2 = () => {
    console.log(local); // undefined;
};

// 作用域链
const foo3 = () => {
    const local = 'foo3';
    const bar = () => {
        const local = 'bar';
        const baz = () => {
            console.log(local);
        };

        baz();
    };
    bar();
};
foo3();

// 闭包
const closure = () => {
    const local = '3';

    return () => local;
};

closure()(); // 3

// cache
const cache = {};
const cacheSomething = (something, key) => {
    if (!cache[key]) {
        cache[key] = something;
    }
};

// 类lodash风格的 memoize