// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
// prompt("enter a number: ");
// let number=Number(prompt("enter a number: "));
// if(number%2==0){
//   alert("Entered no is even");
// }else{
//   alert("Entered no is odd");
// }
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
// prompt("enter a num1: ");
// let num1=Number(prompt("enter a num1: "));
// prompt("enter a num2: ");
// let num2=prompt("enter a num2: ");
// if(num1>num2){
//   alert(`${num1} is maximum value`);
// }else{
//   alert(`${num2} is maximum value`);
// }
// 3. Convert the above code using`?` terniary operator
// num1>num2  ?  alert(`${num1} is maximum value`) :  alert(`${num2} is maximum value`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
// prompt("enter a houseName: ")
// let houseName=prompt("enter a houseName: ");
// if(houseName=="stark"){
//   alert(" Winter is coming");
// }else if(houseName=="lanister"){
//   alert(" A lannister always pays his debt");
// }else{
//   alert( " All men must die");
// }
// 5. Convert the above code using`?` terniary operator
// houseName=="stark" ?  alert(" Winter is coming") :  houseName=="lanister" ? alert(" A lannister always pays his debt") : alert( " All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// prompt("enter month name");
// let monthName=prompt("enter month name");
// switch(monthName){
//   case "january":
//     alert("this month has 31 days");
//     break;
//   case "february":
//     alert("this month has 28 days");
//     break;
//   case "march":
//     alert("this month has 31 days");
//     break;
//   case "april":
//     alert("this month has 30 days");
//     break;
//   case "may":
//       alert("this month has 31 days");
//       break;
//   case "june":
//       alert("this month has 30 days");
//       break;
//   case "july":
//       alert("this month has 31 days");
//       break;
//   case "august":
//       alert("this month has 31 days");
//       break;
//   case "september":
//         alert("this month has 30 days");
//         break;
//   case "october":
//         alert("this month has 31 days");
//         break;
//   case "november":
//         alert("this month has 30 days");
//         break;         
//   case "december":
//         alert("this month has 31 days");
//         break;
//   default:
//     alert("invalid input");      
// }
// /* 7.
// - Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
//   - `Salary <= 20000` tax is 10 %
//   - `Salary <= 40000` tax is 20 %
//   - `Salary > 50000` tax is 30 %

// */
// prompt("Enter your salary amount :");
// let inSalary=prompt("Enter your salary amount :");

// switch(true)
// {
//   case inSalary<=20000:
//     inSalary=inSalary-((10/100)*inSalary);
//     alert(`inhand salary= ${inSalary}`);
//     break;
//   case inSalary<=40000:
//     inSalary=inSalary-((20/100)*inSalary);
//     alert(`inhand salary= ${inSalary}`);
//     break;
//   case inSalary>50000:
//     inSalary=inSalary-((30/100)*inSalary);
//     alert(`inhand salary= ${inSalary}`);
//     break;
//   default:
//     alert("invalid input");
// }

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/
// prompt("Enter your marksbetween 1-100 :");
// let marks=prompt("Enter your marks :");
// if(marks > 80 && marks < 100){
//   alert(`"Grade A"`);
// }else if(marks > 50 && marks < 80){
//   alert(`"Grade B"`);
// }else if(marks > 30 && marks < 50){
//   alert(`"Grade C"`);
// }else{
//   alert(`"Grade D"`);
// }

// prompt("Enter your marksbetween 1-100 :");
// let marks=prompt("Enter your marks :");
// switch(true){
//   case (marks > 80 && marks < 100):
//     alert(`"Grade A"`);
//     break;
//     case (marks > 50 && marks < 80):
//     alert(`"Grade B"`);
//     break;
//     case (marks > 30 && marks < 50):
//       alert(`"Grade C"`);
//       break;
//       case (marks > 0):
//         alert(`"Grade D"`);
//         break;
// }
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
prompt("What is the weather like outside?");
let weather=prompt("What is the weather like outside?");

if(weather=="sunny"){
  alert(`Wear a T-shirt`);
}else if(weather=="rainy"){
    alert(`Don't forget to take your raincoat`);
}else if(weather=="hot"){
  alert(`Get a hanky`);
}else if(weather=="freezing"){
  alert(`Get your sweeter on`);
}else{
  alert(`Not a valid input`);
}

