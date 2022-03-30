//---Microtask queue - call back after after '.then' going to this queue - event loop monitor this queue as well - after call stack empty the code will get execut from queue

//---if Microtask queue and call back queue present in same code event loop first execute  M-queue

//---because event loop prioritize the M-queue more than call back queue

let promiseA = new Promise ((res, rej) =>{
    setTimeout(() => {
        resolve ('A')
    },1000)
})

let promiseB = new Promise ((res, rej) =>{
    setTimeout(() => {
        resolve ('B')
    },2000)
})
// console.log('First');
// promiseA.then((data)=> {console.log((data));})
// console.log('Befor B');
// promiseB.then((data)=> {console.log((data));})
// console.log('Last');//first/before B/last/ A/B

console.log('First');
promiseA.then((data)=> {
    console.log((data));
    console.log('Befor B');
})
promiseB.then((data)=> {
    console.log((data));
    console.log('Last');
})//first/A/before b/B/lasts

// function print(lete) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(lete)
//         },1000)
//     })
// }
// function pirntAl() {
//     print('A').then((res)=>{
//         console.log(res);
//         console.log('berore B');

//         return print('B')
//     }).then((res)=>{
//         console.log(res);
//         console.log('Before c');
//         return print('C')
//     }).then((res)=>{
//         console.log(res);
//     })
// }
// printAl()////A/Before B/B/Before C/C

//---Async await-"synctactic sugar" (simpler syntax to write promises)- make your code very readbale

function print(lete) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(lete)
        },1000)
    })
}

async function printAl() {
    await print('A')
    console.log('Befroe B');
    await print('B')
    console.log('Before c');
    await print('C')
}
printAl()//A/Before B/B/Before C/C


///---first/second/third

//-----Prototype

// let animal ={
//     eat:true,
//     move:true,
//     walk:function () {
//         console.log('I walk');
//     }
// }

let rab={
    jump:true
}
let mouse={
    tail:true
}
rab.__proto__ =animal
mouse.__proto__=animal

console.log('rab',rab);
console.log('mouse',mouse);

//for in loop provided bith own key and inherited key


//----consctructor funct --just like regular func
//but 2 conversions:1.they are name with a capital first letter / 2. they should be called only with "new" keyword

//constructor func return an onject

function User(name) {
   this.fName= name 
   this.isAdmin = true
}
let result = new User('rahul');
console.log(result);//{fname:rahul  isAdmin:true}

//---this{}

let animal ={
    eat:true,
    move:true,
    walk:function () {
        console.log('I walk');
    }
}

function Rabit(name) {
    this.petName=name
this.jumps=true
}
Rabit.prototype=animal//inherits property from animal
let rabbit = new Rabit('Tom')
console.log(rabbit);//{petName:Tom  jumps:true}