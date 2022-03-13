// function normal(params) {
//     //fun.definition
// }

// normal();

// var anony = function (params) {
//     //anonymouns fun. (without func name)
// }

// var f3 = () => {
//     //arrow func
// }

// f3();

// //arrow and anoyn func are not hoisted

// var arrow = (a,b) => {
//     return a+b;
// }

// console.log(arrow(7,5));

// var one_statement = (a,b) => a-b; // no need to write return keyword for one statement inside func  //implicit return

// console.log(one_statement(8,3));

// var delete_paranthisis = n => n*5; // one parameter not need paranthisis {}

// console.log(delete_paranthisis(2));



// let fruits = ['apple','banana','orange','kiwi'];

// fruits.pop();

// console.log(fruits);

// console.log(fruits.pop()); //orange

// console.log(fruits);

// console.log(fruits.push('strawberry')); //3

// console.log(fruits.push('melon')); //4

// console.log(fruits);

//-------indexOf - returns the first index at which a given element occurs

// let fruits = ['apple','banana','orange','kiwi','apple'];

// console.log(fruits.indexOf('apple')); //0

// console.log(fruits.indexOf('apple',1)); //4

//------slice - 

// let fruits = ['apple','banana','orange','kiwi','apple'];

// console.log(fruits.slice(1,4)); //['banana', 'orange', 'kiwi']

// console.log(fruits.slice(2)); //['orange','kiwi','apple']

// console.log(fruits.slice(-4)); //['banana', 'orange', 'kiwi', 'apple']

// console.log(fruits.slice(1,-2)); //['banana', 'orange']