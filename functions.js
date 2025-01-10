// function isPalindroms(str){
//     let revStr="";
//     for(let i = 0;i<str.length;i++){
//         //console.log(str[i]);
//         revStr  += str[i];
//     }
//     if(str == revStr){
//         console.log("Palindroms");
//     }else{
//         console.log("Not a Palindroms");
//     }
// }
// isPalindroms("str");
// isPalindroms("Madam");
// isPalindroms("SIR");
//isPalindroms("MALYALAM");
//anonymous function
// function(){
//     console.log("Anonymous Function");
// }

// function expression
// let x =[1,2,3,4];
// console.log(x);

// let x =function(){
//     console.log("function expression");
// }
// x();

// IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )
// ();

//ARROW FUNCTION
// function demo(){
//     console.log("HELLO");
// }
// demo();

// let x= () =>{console.log("HELLO")};
// x();

// return- implict return and explicit return
// function add(a,b){
//     return a+b;

// }
// let x = add(5,5);
// console.log(x);

let x = (a,b) => a+b;// implict return
console.log(x(30,10));

//explict return
let y = (a,b) => {return a+b};
console.log(y(10,30));