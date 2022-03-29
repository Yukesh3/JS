document.documentElement;//it refers html
document.body//body
document.body.childNodes//all nodes including text node //iterable
// text - stores spaces and next lines

let one = document.body.childNodes

for(let item of one){
    console.log(item);
}
//head and body are siblings and child of html
document.body.children//all the element of nodes

//1st last child takes from nodelist 
document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.previousElementSibling
document.body.lastElementChild.previousElementSibling.lastElementChild
document.body.firstElementChild.nextElementSibling
document.querySelector
document.querySelectorAll//gives nodelist-static(not updating)


let create1=document.createElement('h4');
create1.className='class';
create1.innerText='nex text';
document.body.append(create1)
document.body.prepend(create1)

//First class func -- func in that language can be treated like variable
greet()//reference error

const greet = function () {
    console.log('hello there')
}

greet()//hello there
function random(callback) {
    callback()
}
random(greet)//hello there 

//greet  --- call back funct and

//random -- higher order func and it is takes in callback as an argument


//Dry priciple-- do not repeat yourself

function square(n) {
    return n*n;
}

square(4);//16
square(5);//25

// let arr = [1,2,3,4];

// function multiplyBy2() {
//     const output=[];

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i]*2);
        
    
//     }
//     return output;
// }

// console.log(multiplyBy2(arr));//[2,4,6,8]
// let arr = [1,2,3,4];

// function multiplyBy2() {
//     const output=[];

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i]+2);
        
    
//     }
//     return output;
// }

// console.log(multiplyBy2(arr));//[3,4,5,6]

// let arr = [1,2,3,4];

// function copyyArrayManipulate(array, instructions) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//        output.push(instructions(array[i]));
        
//     }
//     return output;
// }

// function multiply(input) {
//   return  input*2;
// }
// function add(input) {
//     return input+2
// }

// console.log(copyyArrayManipulate(arr, multiply));//[2,4,6,8]
// console.log(copyyArrayManipulate(arr, add));//[3,4,5,6]

const sideOfArray= [1,2,3,4];
const operationsOnSquare=(arr, instructions)=>{
    let output=[];

    for (let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]))
        
    }
    return output
}
const calArea = input=>input*input
const calPeri = input=>input*4

console.log('area array', operationsOnSquare(sideOfArray, calArea));[1,4,9,16]
console.log('PeriArea array', operationsOnSquare(sideOfArray, calPeri));[4,8,12,16]

//higher order func are func that take other func as argument or return func as their results

// function sayHi() {
//     return function () {
//         console.log("hello");
//     }
// }
// const result = sayHi()//calling it using a variable

// result()//hello

// ///----or

// function sayHi() {
//     return function () {
//         console.log("hello");
//     }
// }


// sayHi()()//hello   //-curryong



