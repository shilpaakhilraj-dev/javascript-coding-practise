let array = [1, [2, 3], [4, 5, 6], 7, 8, [9], 0];

// SOLUTION 1 using flat() method
function method1(arr) {
    return arr.flat(Infinity);
}
console.log(method1(array));

// SOLUTION 2 using recursive function
function method2(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...method2(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(method2(array));

// SOLUTION 3 using manual iteration
function method3(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            for (let subItem of item) {
                result.push(subItem);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(method3(array));