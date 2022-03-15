//---object

// let user = {
//     name:'Rahul',
//     age:25,
//     isAdmin:false
// }
// console.log(user.age);//25

// console.log(user['name']);//Rahul

// // user.['age']=29;
// console.log(user.age);

// // new obj
// let user1 = new Object()

// delete user.name
// console.log(user);//{age: 25, isAdmin: false}

//if key have spaces b/w we should use [] for acces

// let fruit = 'apple'
// let objj= {
//     [fruit]:true
// }
// console.log(objj);//{apple: true}

// let fruit = 'apple'
// let objj= {
//     [fruit +   'com']:true
// }
// console.log(objj);//{applecom: true}

// let fruit = [1,2,3,4]
// let objj= {
//     [fruit]:true
// }
// console.log(objj);//{1,2,3,4: true}

// let objj= {
//     fruit: true
// }
// console.log("fruit" in objj);//true

let objj= {
    fruit: true,
    age: 24
}

for (let key in objj){
    //print keys
    console.log(key);//fruit age
}
let salary ={
    j:100,
    a:160,
    p:120
}
let sum =0;
for (let i in salary){
    //print keys
    sum += salary[i]
    
}
console.log(sum);//380


let menu ={
    w:200,
    h:300,
    t:'my menu'
}
let newobj={}
 for (let i in menu){
    if(typeof menu[i]=='number'){
        menu[i] = menu[i]*2;
      
    }
 }
 console.log(menu);//{w: 400, h: 600, t: 'my menu'}
 
 
//---Obj referencing and copying

let mess ="helo"
ph = mess + "world"

console.log(ph);//heloworld
console.log(mess);//helo

let user = {
    name:'hlo'
}
admin = user
console.log(user);//{name: 'hlo'}
console.log(admin);//{name: 'hlo'}

admin.name = "world"

console.log(admin);//{name: 'world'}
console.log(user);//{name: 'world'}

//it is copying value to the reference also

let user1={}
let user2={}
console.log(user1===user2);//false - bacuse diff memory loactions

let use ={
    name:'rah',
    age:24,
    isHappy:true
}
let dupli = {}

for(let i in use){
    dupli[i]=use[i]
}
dupli.isHappy=false;


console.log(dupli);//{name: 'rah', age: 24, isHappy: false}

console.log(use);//{name: 'rah', age: 24, isHappy: true}


let use1 ={
    name:'rah',
    age:24,
    isHappy:true
}
let dupli1 = {}

Object.assign(dupli1,use1)//let clone=Object.assign({},user1)
dupli1.isHappy=false

console.log(use1);//{name: 'rah', age: 24, isHappy: true}
console.log(dupli1);//{name: 'rah', age: 24, isHappy: false}

//---Spread operator

let use3={
    name:'h',
    age:2,
    isHappy:true
}
let clo = {...use3}// or {...use3, lastname:'y'}

clo.lastname='y'

console.log(clo);//{name: 'h', age: 2, isHappy: true, lastname: 'y'}
console.log(use3);//{name: 'h', age: 2, isHappy: true}

let ar1=[1,2,3]
let ar2=[4,5,6]

let ar3=[...ar1,...ar2]
console.log(ar3);//[1, 2, 3, 4, 5, 6]

let obj1 ={foo:'bar', x:42}
let obj2={foo:'baz', y:13}

let obj3={...obj1, ...obj2}
console.log(obj3);//{foo: 'baz', x: 42, y: 13}

