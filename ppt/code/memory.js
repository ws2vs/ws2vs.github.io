const { Buffer } = require('buffer');

const format = bytes => `${(bytes / 1024 / 1024).toFixed(2)}MB`;

const size = 20 * 1024 * 1024;

const showMem = () => {
    const mem = process.memoryUsage();
    console.log(
        `Process: heapTotal ${format(mem.heapTotal)
        } heapUsed ${format(mem.heapUsed)
        } rss ${format(mem.rss)}`
    );
    console.log('-----------------------------------------------------------');
};

const useHeapMem = () => {
    const arr = new Array(size);
    for (let i = 0; i < size; i += 1) {
        arr[i] = 0;
    }
    return arr;
};

const useStackMem = () => {
    const buffer = Buffer.alloc(size);
    for (let i = 0; i < size; i += 1) {
        buffer[i] = 0;
    }
    return buffer;
};

const arr = [];
for (let i = 0; i < 15; i += 1) {
    showMem();
    // arr.push(useHeapMem());
    arr.push(useStackMem());
}
showMem();