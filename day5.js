// let arr = [1,2,3,4,5,6];

// //---include()

// console.log(arr.includes(3)); //true


// //---lastIndexOf

// console.log(arr.lastIndexOf(2)); //1

// //---findIndexOf()

// //returns the index of thr first element in the array that satisfies thr provided testing func

// function greaterThan4(ele) { //returns boolean
//     return ele > 4;
// }

// console.log(arr.findIndex(greaterThan4)); //4

// //whenever you give a function as an argument to a function, that is known as a callback func

// //---concat

// let arr1 = [1,2,3,4,5,6];

// let arr2 = [1,2,3,4,5,6];

// console.log(arr1.concat(arr2));

// //---toString 

// let arr3 = [1,2,3,4,5,6,'abc','def'];
// console.log(arr3.toString()); //1,2,3,4,5,6,abc,def

// //---join

// let arr4 = [1,2,3,4,5,6,'abc','def'];

// console.log(arr4.join('=')); //1=2=3=4=5=6=abc=def

//---some & every

// let arr4 = [1,2,3,4,5,6,'abc','def'];

// let isEven = ele => ele%2===0;

// console.log(arr4.some(isEven));//true

// console.log(arr4.every(isEven));//false

// let arr5 = [1,2,3,4,5,6,'abc','def'];

// console.log(arr5.some(y =>y < 2));//true
// console.log(arr5.every(y =>y < 2));//false

// let fruits = ['apple','banana','orange','kiwi'];

// console.log(fruits.some(y => y.length>5));

// //---filter- return new array which satisfy the given condition

// console.log(fruits.filter(y => y.length>5)); //['banana', 'orange']

// let arr6 = [1,2,3,4,5,6,'abc','def'];

// console.log(arr6.filter(y => ~y %2===0)); //[1, 3, 5]

//---map - returns a new array populated with the results of th call back func

// let arr6 = [1,2,3,4,5,6];

// let newarr = [];

// for (let i = 0; i < arr6.length; i++) {
//     newarr.push(arr6[i]*2)
    
// }

// console.log(newarr);//[2, 4, 6, 8, 10, 12]

// console.log(arr6.map(y => y*8));//[8, 16, 24, 32, 40, 48]


//---foreach - executes a provided func once for each element in the array


// let arr6 = [1,2,3,4,5,6];

// // for (let i = 0; i < arr6.length; i++) {
// //     console.log(arr6[i]*2);   // 2 4 6 8 10 12 
// // }


// arr6.forEach(y => {
//     console.log(y*5); // 5 10 15 20 25
// });
// let arr = [1,2,3,4,5,6];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
    
// }
// console.log(sum); //21 -normal way

// let arr6 = [1,2,3,4,5,6];

// let sum = 0;
// arr6.forEach(y => {
//      sum+=y; //
//      });
//      console.log(sum);//21

//---reduce - reduces to a single value

// let arr = [1,2,3,4,5,6];

// //accumulator,curent,initial value

// let initial = 0;

// let res = arr.reduce (function (accumulat,curre) {
//     accumulat+=curre;
//     return accumulat;
// }, initial)
// console.log(res);

// let arr = [1,2,3,4,5,6];

// let sum_of_even_square = arr.map(y => y*y).filter(y => y%2 === 0).reduce((acc,cur) => {
//     acc+=cur;
//     return acc;
// },0)

// console.log(sum_of_even_square); //56

//map - filter -reduce => are chainable

let salary = [100,200,300,400,500,600];

let res=salary.filter(y => y>300).map(y => y*y).reduce((acc,cur) =>{
    acc+=cur;
    return acc;
},0)

console.log(res); //770000



