// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The single = sign in line 36 is assigning a value to "name". Meaning, if you are "name", than you're called "Dane".
// The === checks strictly whether or not "name"("Dane") equal to 'Mary'. If it does the console will output. "Hi, Mary!""   
// Else in line 40 is there if the oppisite is determined. If 'Dane" is not 'Mary' then the console will respond with
//"How do you do?" In this case the console log will respond 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// "Secret" is a variable. It's value is based on the the 2 conditionals. "Code" is given a value of 123. The first  
// conditional states that if "code" equals 123, than "secret" has the value "super" and the value of "code" is
// multiplied by 2. "code" now equals 246. The second conditional asks if "code" is greater than 250 "secret"   
// equals "duper". We console log super. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent. We set the value to true. We make a variable called age and set the value to
// 34. We make another variable zip and set it's value to 55407. We check if isStudent equal to true and if zip is
// greater than 8000. If both are true we console log "You're a student on the West Coast". If false we check isStudent
// equal to false or is age less than 30. If either are true, we console log "What are your hobbies?" We check if 
// isStudent is equal to true. If true we console log "Welcome to Prime!". If all conditionals are false we console log
// "How about this weather?". We console log "Welcome to Prime!".

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne set to red. However instructions say colorOne is set to blue
//Should be let colorOne = 'blue';
let colorOne = 'red';

// colorTwo set to blue. However instructions say colorTwo set to red.
//Should be let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// Instructions say that if true set colorOne and colorTwo to purlple
// Missing line should say colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//Instructions state that if temp is higher than 39 AND if time is greater or equal to 4. Code uses or.
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Instructions state that if age is equal or greater to minAge we console log enter. The if and else are switched.
// Also age and minAge in the conditional should be switched.
// Should read 
//if ( age <= minAge ){
//  console.log( 'enter' );  
//} else {
//  console.log('no entry');    
//}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

