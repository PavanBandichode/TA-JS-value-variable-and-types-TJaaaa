// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
// prompt("enter your age");
// let inputAge=prompt("enter your age");

// if(12<=inputAge<=55){
//   alert("You can participate in the marathon");
// }else if(4<=inputAge<=11){
//   alert(" You are too young to participate in the marathon");
// }else if(4<inputAge){
//   alert(" Hey Kiddo! Can You Walk ?");
// }else{
//   alert(" You are too old to participate in the marthon");
// }
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
// prompt("Enter the value of n");
// let n=prompt("Enter the value of n");
// for(let i=1;i<=n;i++){
//   "e"="e"+"e";
// }
// alert(`h${n}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
// prompt("eneter number till n:");
// let nNaturalno=prompt("eneter number till n:");
// let sum=0
// for(let i=0 ;i<=nNaturalno;i++){
//   sum=sum+i;
// }
// alert(`sum of first ${nNaturalno} numbers= ${sum}`);
/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
// prompt("enter the number between 1 to 10");
// let inputNumber=prompt("enter the number between 1 to 10");

// switch(true){
//   case(inputNumber==1):
//   alert("ONE");
//   break;
//   case(inputNumber==2):
//   alert("TWO");
//   break;
//   case(inputNumber==3):
//   alert("THREE");
//   break;
//   case(inputNumber==4):
//   alert("FOUR");
//   break;
//   case(inputNumber==5):
//   alert("FIVE");
//   break;
//   case(inputNumber==6):
//   alert("SIX");
//   break;
//   case(inputNumber==7):
//   alert("SEVEN");
//   break;
//   case(inputNumber==8):
//   alert("EIGHT");
//   break;
//   case(inputNumber==9):
//   alert("NINE");
//   break;
//   default:
//     alert("try again");
// }
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/
// prompt("enter the marks between 0 to 100");
// let inputMarks=prompt("enter the marks between 0 to 100");

// switch(true){
//   case(inputMarks>90):
//   alert("Your Grade is AA");
//   break;
//   case(inputMarks>80 && inputMarks==90):
//   alert("Your Grade is AB");
//   break;
//   case(inputMarks>70 && inputMarks==80):
//   alert("Your Grade is BB");
//   break;
//   case(inputMarks>60 && inputMarks==70):
//   alert("Your Grade is BC");
//   break;
//   case(inputMarks>50 && inputMarks==60):
//   alert("Your Grade is CC");
//   break;
//   case(inputMarks>40 && inputMarks==50):
//   alert("Your Grade is CD");
//   break;
//   case(inputMarks>30 && inputMarks==40):
//   alert("Your Grade is DD");
//   break;
  
//   default:
//     alert("Your Grade is FF");
// }
// [Your code goes here]

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
prompt("enter number 1");
let num1=prompt("enter number 1");
prompt("enter number 2");
let num2=prompt("enter number 2");
if(num1>num2){
  alert(`num1 is larger`);
}
  else{
    alert(`num2 is larger`);
  }

/*

🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/
let numA=+prompt("enter numA")
let numB=+prompt("enter numB")
let operation=prompt("enter add,sub,mul,div opration");
switch(operation){
      case "add":
        alert(`sum of ${numA} and ${numB}=${numA+numB}`);
      break;
      case "sub":
        alert(`sum of ${numA} and ${numB}=${numA-numB}`);
      break;
      case "mul":
        alert(`sum of ${numA} and ${numB}=${numA*numB}`);
      break; 
      case "div":
        alert(`sum of ${numA} and ${numB}=${numA/numB}`);
      break;    
}
// [Your code goes here]
