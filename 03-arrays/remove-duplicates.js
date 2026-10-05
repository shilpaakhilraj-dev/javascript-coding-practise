// SOLUTION 1
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(method1(arr));
function method1(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    })
}

// SOLUTION 2
function method2(arr) {
    return arr.reduce((acc, current) => {
        // return acc.includes(current) ? acc : [...acc, current];

        if (!acc.includes(current)) {
            acc.push(current);
        }
        return acc;
    }, []);
}
console.log(method2(arr));

// SOLUTION 3
function method3(arr) {
    let uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}
console.log(method3(arr));