/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const centerIndex = Math.floor(arr.length / 2);
    const center = arr[centerIndex];
    arr.splice(centerIndex, 1);
    let left = [];
    let right = [];
    let temp;
    for (let i = 0; i < arr.length; i += 1) {
        temp = arr[i];
        if (temp < center) {
            left.push(temp);
        } else {
            right.push(temp);
        }
    }

    left = sortArray(left);
    right = sortArray(right);

    return [...left, center, ...right];
}