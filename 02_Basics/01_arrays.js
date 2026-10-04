const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(arr)

const myArr = new Array('a', 'b', 'c','d','e');
// console.log(myArr)

// Array Methods
// arr.push(20)
// console.log(arr)

// arr.push(30)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(-10)
// console.log(arr)

// arr.shift()
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.includes(3)); // arr.includes(x) tells whether x present in the array 'arr' or not.
// console.log(arr);
// console.log(arr.indexOf(7))

// const newArr = arr.join() // It is converting the Array into String.
// console.log(newArr);
// console.log(typeof newArr);

//Slice, splice

console.log(`Real arr: ${arr}\n`);
const arrSlice = arr.slice(0,9)
console.log(`Point A: ${arrSlice}`);
console.log(`Real arr now: ${arr}\n`);
const arrSplice = arr.splice(0,9)
console.log(`Point B: ${arrSplice}`);
console.log(`Real arr now: ${arr}`);

