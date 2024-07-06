// chapter 2 practise set
// Q 1:   use logical operators to find whether the age of a  person lies between 10 and 20?
//  solution:
// let age = prompt("What is your age?")
// if (age< 10 && age<20) {
//     console.log("Your age lies between  10 and 20");  
// }
// else {
//     console.log("Your age lies between  10 and 20");  
// }
// Q2:  Demonstrate the  use of switch case  statements in JavaScript
// solution:
var age = prompt("What is your age?");
switch (age) {
    case "12":
        console.log("Your age is 12");
        break;
    case " 13":
        console.log("Your age is 13");
        break;
    case "14":
        console.log("Your age is 14");
        break;
    default:
        console.log("Your age is not special");
        break;
}
