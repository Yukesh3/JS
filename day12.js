function cb() {
    console.log('After timeout');
}
console.log('me first');

function print() {
    console.log('me second');
}
setTimeout(cb, 2000)
print()
console.log('Me third');
//setTimeout is sents to web api while executing because it is not a part of JS(it is part of web browser)

//call back queue//FIFO

// when timer get 0 web api sent call back to call back queue

//Event loop---it decides if call back func is fit for call stack or not from queue-

//it is constantly checking if call stack is empty..if empty it push 1st func from queue to call stack
//console also web api

//js have synchronus behaviour but web api has Aysnchronous behaviour 

function printAlphabets() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
}
function print() {
    setTimeout(()=>{
        console.log("a");
    },3000)
}

// function printAl(letter,delay) {
//     setTimeout(()=>{
//         console.log(letter);
//     },1000)
// }
// printAl('a',1000)
// printAl('b',2000)
// printAl('c',3000)


function printAl() {
    setTimeout(()=>{
        console.log('first');
        setTimeout(()=>{
            console.log('second');//it have pyramid of doom or call back hell--seems like difficult structure
        },1000)
    },1000)
}
printAl()
//js have cam up with promises to solve that diificult kind of structure(pyramid of doom)
//promises is the obj
//promises have resolved and rejected also have pending
//promise is the constructor func

let pr = new Promise((resolve, reject)=> {
   setTimeout(()=>{
    console.log('first');
    resolve(1)
    // reject(1)
   },2000) 
})

// console.log('second');

// promise can make asynchronuous into synchronous

//.then --- .catch --- .finally->these 3 accept call func

//.this- cb run inside after promise will resolved
//.catch - cb run after promise is rejected
//.finally- run on both

pr.then(()=> {console.log('second');}).catch(()=>{console.log('promise rejected');}).finally(()=>{console.log('runs both cases');})

function printNu(num) {
    return new Promise((resolve,reject) =>{
        if (num %2==0){
            resolve('done')
        }else{
            reject('not')
        }
    })
}
printNu(24).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})//done
printNu(23).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})//not

// function callPr(alpha) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(alpha)
//         },1000)
//     })
// }

///---promise chaining

function callPr(alpha) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(alpha);
            resolve('promise done')
        },1000)
    })
}
callPr('A').then(()=>{return callPr('B')}).then(()=>{return callPr('C')})

callPr('A').then(()=>callPr('B')).then(()=>callPr('C'))