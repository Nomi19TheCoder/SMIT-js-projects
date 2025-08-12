// JavaScript Practice Questions
// 1. Write a program that asks the user for their name using prompt and then displays a greeting in an
// alert box.
const askName= prompt(`What's your name buddy`, `Enter Name Here`);
alert(askName);

// 2. Ask the user to enter a number. If the number is greater than 10, display 'Number is big'.
const askNumber= prompt(`Enter a number`, `Enter Name Here`);
const number= Number(askNumber);
if (number>10) {
    alert(`Number is big`)
} else {
    alert(number)
}

// 3. Create a variable total with value 50 and add 25 to it, then display the result in an alert.
let newNumber=50;
alert(newNumber+=25);
// 4. Ask the user to enter their favorite color, then display 'Wow! [color] is my favorite too!'.
const askColor= prompt(`What's your favorite color buddy`, `Enter Color Name Here`);
const colorName= askColor;
alert(`Wow! ${colorName} is my favorit too. No silly your choice is terible`);

// 5. Ask the user for their age using prompt. If the age is greater than or equal to 18, display 'You are
// eligible to vote'.
// 6. Ask the user to enter two numbers and display their sum in an alert.
// 7. Ask the user to enter 'yes' or 'no'. If the answer is 'yes', display 'Great!'.
// 8. Ask the user for a password. If the password is '12345', display 'Access granted'.
// 9. Ask the user for two numbers. If the first number is equal to the second, display 'Both are equal'.
// 10. Create a variable named myName and assign your name to it. Display it using alert.
// 11. Ask the user for temperature. If temperature is greater than 30, display 'It's hot today'.
// 12. Write a program that concatenates 'Hello' and 'World' with a space in between, then displays
// 'Hello World' in an alert.
// 13. Ask the user for a number. If it is divisible by 2, display 'Even number'.
// 14. Ask the user for their city name. If the city is 'Karachi', display 'Welcome to the city of lights'.
// 15. Ask the user for their marks. If marks are greater than or equal to 50, display 'Pass', otherwise
// 'Fail'.