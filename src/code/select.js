/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        let minIndex = i;
        let temp;
        for (let j = i + 1; j < arr.length; j += 1) {
            temp = arr[j];
            if (temp < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}