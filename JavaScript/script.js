console.log("external js connected sucessfully");
console.log(1+"1");
console.log(1/"hii");
console.log(1+10-10+12*2+"1"-2);
// work from left to right fst mul, then add, sub
console.log(1/0); 
// infinity
console.log(1+20+2-2/4+(4+3)+3%6*5+1*0+1+3);
// frst cal bracket 

var val =confirm("are you 18+")
if(val==true){
    alert("welcom")
}
else{
    alert("bye");
}

var a=prompt("enter age");
if (a>18){
    alert("wlcome");
}
else{
    alert("you are not eligible")
}

// 3 key words
// 1 var
var a;                   //Declaration
var a=30;               //Initialization
console.log(a +"using var");
a=20;                   //Reinitialization
console.log(a +"using var");
a="hello";             //ReaDeclaration and initialization
console.log(a +"using var")

//2 let
let b;
b=20;
// console.log(b);
b=30;
console.log(b +"using let");
// let b="hii";        //ReaDeclaration and initialization not posible
// console.log(b);

//3 const
// const c; Declaration not posible
const c=23;
console.log(c +"using const");
// const c=12;        //Reinitializaation Not posible
// const c="hello";
// console.log(c);    //ReaDeclaration and initialization not posible

// Hosting
alert("Hello "+Num);
console.log(Num);
var Num=34;         //Undefine
console.log(Num1); 
let Num1=54;        //Error
console.log(Nm2);
const Num2 =23;     //Error




