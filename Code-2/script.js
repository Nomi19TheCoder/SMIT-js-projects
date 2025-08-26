// JavaScript Assignment (Chapters 1–18)
// 1. Ask the user to enter their age. If the age is less than 13, display 'Child'; if between 13 and 19,
// display 'Teenager'; otherwise display 'Adult'.
let enterAge = prompt(`Enter Your Age`, `Weite Here`);
const userAge = Number(enterAge);
const message = userAge<13? `Child`: userAge => 13 ||  userAge === 19?`Teeneger`:`Adult`;
let result=alert(message); 

// 2. Write a program that asks the user to enter a number. If the number is divisible by both 2 and 3,
// show 'Divisible by both'. Otherwise, show 'Not divisible by both'.
let enterNumber = prompt(`Enter Your Number`, `Weite Here`);
const userNumber = Number(enterNumber);
const messageSecond = userNumber%2===0 && userNumber%3===0 ?`Divisible by both`:`Not divisible by both`;
 result=alert(messageSecond); 

// 3. Create a program that asks the user for a password. If it matches 'saylani123', show 'Access
// Granted', otherwise show 'Access Denied'.
const enterPassword=prompt('Enter Your Password', 'Enter Here')
const userPassword = Number(enterPassword);
const messageThird = userPassword==='saylani123'?'Access';'Access Denied'
 result=alert(messageThird); 
// 4. Ask the user to enter two numbers. Display the larger number using an if…else statement.
const firstNumber= prompt('Enter a Number')
const secondNumber= prompt('Enter an other Number')
const firstEntered = Number(firstNumber);
const secondEntered = Number(secondNumber);
const messageFourth = Math.max(firstEntered,secondEntered);
 result=alert(`${messageFourth} is the larger number`); 
// i read the question about using if else, but i found this method efficient way and i already use ternory method in the above question

// 5. Create an array of 5 colors. Display the first and last color from the array in an alert.
const colorAdder=() => {
    const colorArr= [];
for(i=0;i<5;i++){
 
  let R= Math.floor(Math.random()*255);
  let G= Math.floor(Math.random()*255);
  let B= Math.floor(Math.random()*255);
  colorName=`rgb(${R},${G},${B})`
  colorArr.push(colorName)
}
    console.log(colorArr)
console.log(colorAdder());
const messageFifth=colorArr.splice(0,3);
result=alert(messageFifth);

}

// 6. Make an array of fruits with 3 items. Add one more fruit at the end using .push() and show the
// new array in console.
// 7. Write a program that removes the first element of an array of city names and then prints the
// updated array.
// 8. Create an array of numbers [10, 20, 30, 40, 50]. Use .splice() to remove the middle number (30)
// and display the array.
// 9. Make an array [100, 200, 300, 400, 500]. Use .slice(1, 4) and show the result in the console.
// 10. Ask the user to enter 3 subjects’ marks. Store them in an array. Calculate the total and average
// using array values and display it.
// 11. Write a program that asks the user for a month number (1–12). Use if…else if statements to
// display the season ('Winter', 'Spring', 'Summer', 'Autumn').
// 12. Create a loop that prints all even numbers from 2 to 20 in the console.
// 13. Use a for loop to display each element of the array ['Ali', 'Sara', 'Ahmed', 'Ayesha'].
// 14. Write a program that asks the user to enter a number and then displays its multiplication table
// using a loop (up to 10).
// 15. Create an array [2, 4, 6, 8, 10]. Use a for loop to calculate the sum of all numbers and print it.
// 16. Ask the user to enter a name. If the name is 'Alice' or 'Bob', show 'Welcome!'. Otherwise, show
// 'You are not authorized.'.
// 17. Write a program that uses nested if statements to check if a number is positive and also even. If
// both are true, display 'Positive Even'. If only positive, display 'Positive Odd'. Otherwise show
// 'Negative number'.
// 18. Create an array ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']. Use .splice() to insert 'Mango' at
// the 2nd index and show the new array.