/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (arr) => {
    let done = true;
    let lastIndex = arr.length - 1;
    do {
        done = true;
        let prev;
        let next;
        for (let i = 0; i < lastIndex; i += 1) {
            prev = arr[i];
            next = arr[i + 1];
            if (next < prev) {
                arr[i] = next;
                arr[i + 1] = prev;
                done = false;
            }
        }
        if (!done) {
            lastIndex -= 1;
        }
    } while (!done)

    return arr;
}