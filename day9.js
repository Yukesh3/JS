//function n() {
//     console.log(this);
// }

// let sayArrow =()=>{
//     console.log(this);
// }

// let user ={
//     name: 'Rahul',
//     sayObj(){
//         console.log(this);
//     }
// }
// n();//global

// sayArrow();//global

// sayObj();//user obj

//---this  -this refers to the obj from where the func is called

// 1. this - used somewhere inside the function

// 2. we dont know the value of this

// 3. this - value is determined during run timr when the func is executed\

//---call , apply and bind

// let user1 ={ 
// name: 'helo',
// sayhiii(){
//     console.log(this.name);
// }
// }

// function hlo () {
//     console.log('helllo', this.fname);//helllo world
// }

// let admin ={ 
//     fname: 'world',

//     }
//     user1.sayhiii.call(admin) //world

//     hlo.call(admin);//helllo world

    //call ----by commas -- hlo.call(admin);


    //apply---bt arrays --  hlo.apply(admin);

    //---returns a new funct with the value of this

    // let newHlo = hlo.bind(admin);

    // newHlo()//helllo world
// or 

// hlo.bind(admin)();//hello world

//call , apply & bind are used to re bind the value of this to another object


var message = 'Hello Earth'

const obj = {
    
    message: 'Hello, World'}
    
    function print() {
        console.log(this.message)
    }
    
    print()//Hello Earth
    print.call(obj)//Hello, World
    print.apply(obj)//Hello, World
    print.bind(obj)()//Hello, World

    ///---map is a collection of keyed data items like an obj. main diff b/w map and an obj is that a map alows keys on any type.

// map 

let myMap = new Map()

myMap.set(1, 'num1');
myMap.set('1', 'str1');
myMap.set(true, 'bool1');

myMap.delete('1');
myMap.size;
myMap.get(true)
myMap.clear;

