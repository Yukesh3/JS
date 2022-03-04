let a = 10;

if (a>18) {
    console.log("adult");

} else {
    console.log("baby");
}






let age = 45;

switch (true) {
    case age <= 18:
        console.log("child");
        break;

    case age <= 30 && age > 18:
        console.log("adult");
         break;

    default:
        console.log("old");
        break;

        
       
}

let day = 9;

switch (day) {
        case 0:
        console.log("monday");
        break;

        case 1:
        console.log("tuesday");
        break;

        case 2:
        console.log("wednesday");
        break;

        case 3:
        console.log("thursday");
        break;

        case 4:
        console.log("friday");
        break;

        case 5:
        console.log("saturday");
        break;

        default:
        console.log("sunday");
        break;
}


// Loops
// for, while, do while


//for:

// initialization->condition->incre/decrement

// var a;  - declare
// var a = 1;  - intialize

for (let i = 1; i <= 10; i++) {

console.log(i*19);    

}

for (let i = 1; i <= 10; i++) {

    console.log("19*" + i + "=" + i*19);    
    
    }