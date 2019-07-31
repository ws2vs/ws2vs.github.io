const { EventEmitter } = require('events');

const ee = new EventEmitter();

const asyncFn = () => {
    setTimeout(() => {
        ee.emit('onAsyncFnDone', 1);
    }, 2000);
};

ee.on('onAsyncFnDone', (ret) => {
    console.log(ret);
});

asyncFn();


function higherOrderFunction(callback) {
    return function () {
        // do something
    };
}


higherOrderFunction(() => {});




const getLocale = (callback) => {
    let ret = null;

    ret = asyncGetRet();

    if (ret) {
        callback(null, ret);
    } else {
        callback(new Error('some err info'), null);
    }
};