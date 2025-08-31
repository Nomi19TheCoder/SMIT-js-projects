// // JavaScript Assignment (Chapters 1–18)
// // 1. Ask the user to enter their age. If the age is less than 13, display 'Child'; if between 13 and 19,
// // display 'Teenager'; otherwise display 'Adult'.
let enterAge = prompt(`Enter Your Age`, `Weite Here`);
const userAge = Number(enterAge);
const message = userAge<13? `Child`: userAge >= 13 &&  userAge <= 19?`Teeneger`:`Adult`;
let result=alert(message); 

// // 2. Write a program that asks the user to enter a number. If the number is divisible by both 2 and 3,
// // show 'Divisible by both'. Otherwise, show 'Not divisible by both'.
let enterNumber = prompt(`Enter Your Number`, `Weite Here`);
const userNumber = Number(enterNumber);
const messageSecond = userNumber%2===0 && userNumber%3===0 ?`Divisible by both`:`Not divisible by both`;
 result=alert(messageSecond); 

// // 3. Create a program that asks the user for a password. If it matches 'saylani123', show 'Access
// // Granted', otherwise show 'Access Denied'.
const enterPassword=prompt('Enter Your Password', 'Enter Here')
const userPassword = Number(enterPassword);
const messageThird = userPassword==='saylani123'?'Access':'Access Denied'
 result=alert(messageThird); 
// // 4. Ask the user to enter two numbers. Display the larger number using an if…else statement.
const firstNumber= prompt('Enter a Number')
const secondNumber= prompt('Enter an other Number')
const firstEntered = Number(firstNumber);
const secondEntered = Number(secondNumber);
const messageFourth = Math.max(firstEntered,secondEntered);
 result=alert(`${messageFourth} is the larger number`); 
// // i read the question about using if else, but i found this method efficient way and i already use ternary method in the above question

// // 5. Create an array of 5 colors. Display the first and last color from the array in an alert.
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

// // 6. Make an array of fruits with 3 items. Add one more fruit at the end using .push() and show the
// // new array in console.
const fruitArr=['apple','banana','mango'];
const messageSixth=fruitArr.push('orange');
console.log(`Array of fruit = ${fruitArr}`)
result=alert(fruitArr);
// 7. Write a program that removes the first element of an array of city names and then prints the
// updated array.
const cityArr=['Karachi','Lahore','Islamabad'];
cityArr.shift();
console.log(cityArr);
// // 8. Create an array of numbers [10, 20, 30, 40, 50]. Use .splice() to remove the middle number (30)
// // and display the array.
const numberArr = [10, 20, 30, 40, 50];
numberArr.splice(2,1);
console.log(numberArr);
// // 9. Make an array [100, 200, 300, 400, 500]. Use .slice(1, 4) and show the result in the console.
const bignumberArr =[100, 200, 300, 400, 500];
console.log(bignumberArr.slice(1,4));
// // 10. Ask the user to enter 3 subjects’ marks. Store them in an array. Calculate the total and average
// // using array values and display it.
let valueArr=[];
let avg;
const evaluation=()=>{
const enteredValue=()=>{
  for(i=0;i<3;i++){
    const enterValue=prompt('Enter 3 values for and find there average', 'Value');
    
    valueArr.push(Number(enterValue))

    };
  };
enteredValue()
const average=()=>{
 const sum = valueArr.reduce((primary, secondary)=> {return primary + secondary});
  
   avg=sum/3;
};
 average() 
  console.log(valueArr)
  console.log(avg);
  };
evaluation();

// // 11. Write a program that asks the user for a month number (1–12). Use if…else if statements to
// display the season ('Winter', 'Spring', 'Summer', 'Autumn'). 
const askMonth = prompt('Write the month Number you want to', 'Month Number')
const monthNumber= Number(askMonth);
const validation = monthNumber>=1 && monthNumber<=12;
  if(validation){
    const season=monthNumber<=3?'Winter':monthNumber<=6?'Autumn':monthNumber<=9?'Summer':monthNumber<=12?'December';
    alert(`It's ${season}`);
  }
  else{
  alert(`Your month number is not valid`);
  }
// 12. Create a loop that prints all even numbers from 2 to 20 in the console.
const tableEven=()=>{
  let evenArr=[]
  for (i=1;i<11;i++){
    const tableNumbers=i*2;
    evenArr.push(tableNumbers);
  }
  return evenArr.join(',');
} 
console.log(tableEven())
// 13. Use a for loop to display each element of the array ['Ali', 'Sara', 'Ahmed', 'Ayesha'].
let nameArr=['Ali', 'Sara', 'Ahmed', 'Ayesha'];
const displayFunction=()=>{
  for(i=0;i<nameArr.length;i++){
    const name = nameArr[i]
    console.log(name);
};
};
console.log(displayFunction());
// 14. Write a program that asks the user to enter a number and then displays its multiplication table
const  numberRrequir=prompt('Enter a Number for multiplication','0');
const numberMultiple=Number(numberRrequir);
const multiplicationArr=[];
for (i=1;i<11;i++){
  multiplicationArr.push([i*numberMultiple]);
};
alert(multiplicationArr);



// using a loop (up to 10).
// // 15. Create an array [2, 4, 6, 8, 10]. Use a for loop to calculate the sum of all numbers and print it.
const  myArr= [2, 4, 6, 8, 10];
const addFunction=(primary,secondary)=>{
  return primary+secondary;
};
let addition = myArr.reduce((addFunction));
console.log(addition);
// 16. Ask the user to enter a name. If the name is 'Alice' or 'Bob', show 'Welcome!'. Otherwise, show
// 'You are not authorized.'
const enterName=prompt('Enter a Name','Name');
const enteredName=enterName.tolowercase()
const nameFunction=()=>{
  switch(enteredName){
    case: 'bob';
    alert(`Welcome!`);
    break;
    case: 'alice';
    alert(`Welcome!`);
    break;
    default:
    alert(`You are not authorized.`)
  }
}
// 17. Write a program that uses nested if statements to check if a number is positive and also even. If
// both are true, display 'Positive Even'. If only positive, display 'Positive Odd'. Otherwise show
// 'Negative number'.
const unknownNum=prompt('Enter a number','number');
const checkNumber=Number(unknownNum);
const nameFunction=()=>{
  if (checkNumber>=0){
    
    const myNumber= checkNumber%2==1?'Possitive Even':checkNumber%2!=1?'Possitive Odd';
    alert(`Your Number is ${myNumber}`)
  }
  else{
    alert('Your Number is Negative')
  };
};
// 18. Create an array ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']. Use .splice() to insert 'Mango' at
// the 2nd index and show the new array.
let nextArr= ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
nextArr.splice(1,1,'Mango');
console.log(nextArr);