// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
let language="JavaScript";
alert(`I am learning ${language}`);
alert(`value of num1 is ${num1} and value of num2 is ${num2}`);
alert(`The sum of num1 and num2 is ${num1+num2}`);

/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
  
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/
// prompt("enter your name :");
// let userName=prompt("enter your name :");

// prompt("enter your profession :");
// let userProfession=prompt("enter your profession :");
// alert(`I am ${userName} a ${userProfession}`);


// prompt("Are you adult?");
// let isAdult=prompt("Are you adult?");

// alert(`Username: ${userName} \nAdult: ${isAdult} \nProfession: ${userProfession}`)
    
   
/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/
let numA = 21;
let numB = 32;
alert(numA+numB);
alert(numA-numB);
alert(numA*numB);