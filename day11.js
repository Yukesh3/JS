function outer() {
    var num = 5
    function inner() {
        console.log(num);
    }
    inner()
}
outer()

function x() {
    return 7
}
let result = x()
console.log(result);//7

//---closure- is a func bundled togehter with it's lexical environment.

function makeCounter() {
    let count=0;
    return function () {
        return count++;
    }
}
let counter= makeCounter()
console.log(counter());//0
console.log(counter());//1

//---setTimeout()--callback and delay
setTimeout(function () {
    console.log('hi');//print after 3 sec
},3000)
console.log('print after');//1st print
//print after----3 sec ---hi

// function loop() {
//     for(let i=0; i<=5; i++){
//         setTimeout(function () {
//             console.log(i);
//         }, i*1000)
//     }
//     console.log('inside loop');
// }
// loop()//let is block scoped and set Timeout call back func accres a new variable i all these variable have diff references
function loop() {
    for(var i=0; i<=5; i++){
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x*1000) 
        }
       close(i)
    }
    console.log('inside loop');
}
loop()
