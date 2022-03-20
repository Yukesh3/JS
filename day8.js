// // let use={
// //     age:30,
// //     name:'y',
// //     sayhi: function () {// func bound to an onj is called a method
// //         console.log('hi',this.age);
// //     }
// // }
// // use.sayhi();//hi
// // let admin = use
// // use=null;//error if access use
// // // use.sayhi();//error
// // // admin.sayhi();//eror  console.log('hi',use.age);

// // admin.sayhi();// hi 30

// // let user = {
// //     fname:'rahul',
// //     score:0,
// //     incrementscore(){
// //         this.score++
// //     }
// // }
// // user.incrementscore()
// // user.incrementscore()
// // console.log(user.score);//2

// function say() {
//     console.log(this.fname);
// }
// let use1={
//     fname:'y'
// }
// let use2={
//     fname:'k'
// }
// use1.func1 = say
// use2.func2=say
// use1.func1()//y
// use2.func2()//k

// // var fname='l'

// use1.func1()//y
// let use3={
//     fname:'z',
//     say:()=>{
//         console.log(this.fname);
//     }
// }

// //vale of "this" is defined during runtime and it refers to the obj from where it was called.
// // in normal func "this refers to the global obj(window obj"
// say()//undefined
// use3.say()//l

// let lad ={
//     step:0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     showstep(){
//         console.log(this.step)
//     }
// }
// lad.up()
// lad.up()
// lad.down()
// lad.down()
// lad.down()
// lad.showstep()//-1
// lad.up()
// lad.up()
// lad.up()
// lad.showstep()//-2

// const obj ={
//     mess:'hello, world',
//     getmess(){
//         const mess='hello, earth'
//         return this.mess
//     }
// }
// let res=obj.getmess()
// console.log(res);//hello, world


// let ib={
//     who:'world',
//     greet:function(){
//         console.log('hello, ${this.who}');
//     },
//     farewell:()=>{
//         console.log('Goodbye, ${this.who}');
//     }
// }
// ib.greet()
// ib.farewell()

let obj = {
    who: 'World',
    greet: function () {
        console.log(`Hello, ${this.who}`)
    },
    farewell: () => {
        console.log(`Goodbye, ${this.who}`)
    }
}

obj.greet()//Hello, World
obj.farewell()//Goodbye, undefined (because arrow funct)

