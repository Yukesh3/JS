//---JQuery -it simplifies DOM manipulation,event handling and animation in HTML. AJax is important.
//---3rd party library

$(".heading").click(function () {
    $("p").hide()
})

$(".h2").click(function () {
    $(this).hide()
})

$(".h3").click(function () {
    $(this).toggle()
})
// it is function which takes an object of diff ways

$(".btn").click(function () {
    $.ajax({
           url : "https://jsonplaceholder.typicode.com/todos",
           type : "GET",
           success : function (data) {
               console.log(data);
           }
    })
})
//Create Read Update Delete ---CRED
//click , dblclick, 

//---API - helps with connect two application (Application programming interface)
//---Ajax - helps to update the current webpage without loading--ie., calling a server

//---Class
//---JS is functional programming language

class A {
  constructor(name){
      this.userName = name
  }

  printName (){
      console.log("name is:", this.userName);
  }
}

var a = new A("Yukesh");

a.printName();
console.log(a.userName); 




class B extends A{
//Take property from Class A
}