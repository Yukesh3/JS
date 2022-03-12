let arr =[1,"a",2,"b",3,"c",4];


// arr.push(3);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(2);
// console.log(arr);


// function countstr(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (typeof(element)==="number") 
//            count++; 
//         }  
//         return count;
   
// }
// var res = countstr(arr);

// console.log(res);

function countstr(arr) {
    let count = 0;

    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof(element)==="number") temp.push(element)
        }  
        return temp;
   
}
var res = countstr(arr);

console.log(res);

let one = [1,2,3,4,5];

const value1 = one.some(element=> element<2);

const value2 = one.every(element=> element<2);

console.log(value1);
console.log(value2);