//Strings
// \n- in '' and "" -its a escape charac
//single quote ''
//double quote ""
//backticks ``

// var bill = 100;

// var mess= `pay ${bill}` //template literal - pay 100

// console.log(mess);

//multiple line

//"hello\"world"

//string charc [] or charAt()

// var str ="hello";

// console.log(str.length);//5

//strings are inmutable - i.e we can't change the particular element in string

//concatinations of strings is possible

// var a= "hello";

// var v="world";

// console.log(a.concat(" ",v));

//---indexOf

//charc not found return -1

//---includes() - returns a boolean value

//---slice()-will work on neg index

//---substring()-doesn't wrk for neg index

// let str = "how are you";

// console.log(str.substring(2,6));//ring

//split-this method converts your string to an array -workk only on string
// let one = str.split(' ')
// console.log(one);//['how', 'are', 'you']

// console.log(one.join('-'));//how-are-you

// let str = "how*are*you";
// let one = str.split('*')

// console.log(one.join('+'));//how+are+you
// console.log(one);//['how', 'are', 'you']

//---reverse

// let str = "how are you";
//  console.log(str.split(' ').reverse().join('+'));//you+are+how

 let str = "how are you";

 let rev = ''

 for (let i =str.length-1; i >=0; i--) {
     rev += str[i];
     
 }
 console.log(rev);//uoy era woh

 //---replace and replaceAll

 const temp = 'john is good guy. john is working';

 console.log(temp.replace('john','rahul'));//rahul is good guy. john is working

 console.log(temp.replaceAll('john','rahul'));//rahul is good guy. rahul is working

 //---trim - clear starting and ending spaces

 const temp1 = '            john is good guy. john is working       ';

 console.log(temp1);//            john is good guy. john is working

 console.log(temp1.trim());//john is good guy. john is working

 //--toUppercase(),  toLowercase()

 let two = 'hello';
 let three= 'GOOD';

 console.log(two.toUpperCase());//HELLO

 console.log(three.toLowerCase());//good


 //---object -key value pair

 //key should be string, value can be anything

 let obj ={
     name:'Yukesh', 
     isStudent: true,
     array: [1,2,3],
     obj2:{
         inside_obj:'inside'
     }
 }

 console.log(obj.array[1]);//2

 //coercion











