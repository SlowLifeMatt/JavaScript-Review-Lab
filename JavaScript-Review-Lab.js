// JavaScript Review Lab


// I. Variables & Datatypes

// /*
// 1. How do we assign a value to a variable? With the assignment operator var, let or const
// 2. How do we change the value of a variable? With the = to give the variable a new value
// 3. How do we assign an existing variable to a new variable? using the assignment operator = to your first variable
// 4. Remind me, what are declare, assign, and define? Declare is creating a variable, Assign is putting a value in that variable. Define is where the variable gets stored
// 5. What is pseudocoding and why should you do it? Helps you figure out what you want to do, Set yourself up
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 80% planning 20% coding
// */

//B. Strings

let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
secondVariable = secondVariable.toString()

// console.log(firstVariable)
// console.log(secondVariable)

let yourName = "Matty"

let myName = 'Hello, my name is ' + yourName

// console.log(myName)

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false && false && false && false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm

let animalType = "cow"
function checkIfCow(animal) {
    if (animal === "cow"){ 
    console.log('mooooo');
    } else {
        console.log("Hey! Youre not a cow.")
    }
}
//  checkIfCow(animalType)

// E. Driver's Ed

 let driverAge = 14
    if(driverAge >= 16) {
        console.log("Here are the keys!")
    } else {
        console.log("Sorry, you're too young.")
    }

// II. Loops

// 1. 

    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
// 2.

    for (let i = 10; i <= 400; i++){
        console.log(i);
    }
// 3.

    for (let i = 12; i < 4000; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }

//B. Get even

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i, "<--is an even number")
    } else {
    console.log(i);
}
}

//C. Give me Five

for (let i = 1; i<= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("I found a " + i + ". Three is a crowd." + " I found a " + i + ". High five!");
    }else if (i % 5 == 0) {
        console.log("I found a " + i + ". High five!");
    } else {
        if (i % 3 == 0) {
            console.log("I found a " + i + ". Three is a crowd");
        }
    }
}

//D. Savings account

let bank_account = 0
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log("Your bank account balance is $" + bank_account + ".")
  bank_account = 0
for (let i = 1; i <= 100; i++) {
    bank_account += i * 2;
}
console.log("Your bank account balance is $" + bank_account + ".")

// III. Arrays & Control flow

// A. Talk about it

// 1. What are the things in an array called? an element
// 2. Do Arrays guarantee those things will be in order? Yes and no. String keys that are not integers are on insertion order and integers are ascending numeric order.
// 3. What real-life thing could you model with an array? Contact list of your friends and family.
 
// B. Easy Does it

const quotes = ["Hello" , "Goodbye" , "See you later"];
console.log(quotes)

// C. Accessing elements

const randomThings = [1, 10, "Hello" , true];
    console.log(randomThings[0])
randomThings [2] = "World"
console.log(randomThings)

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
    // console.log(ourClass[2])
    ourClass[ourClass.length-1] ='Octocat'
    console.log(ourClass);
ourClass.push("Cloud City");
    console.log(ourClass)

// E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Egon", "Tom");
//console.log(myArray);

myArray.shift();
//console.log(myArray);

myArray.unshift("Bob Marley");
//console.log(myArray)

myArray.pop()
//console.log(myArray)

myArray.reverse()
//console.log(myArray)

//5. Mutate means to change. The .reverse, returned the array in reverse.

// F. Biggie Smalls

let num = 150;
if (num < 100){
console.log("little number") 
 } else if (num >= 100) {
    console.log("big number")
}

//G. Monkey in the Middle

  num = 6;
if( num < 5) {
    console.log("little number")
} else if (num > 10) {
    console.log("bigger number")
} else {
    console.log("monkey")
}

 //H. What's in Your Closet?

 const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1.

//console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2.

  kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset)

// 3.

  kristynsCloset.splice(5,1, "stained knit hat")
// console.log(kristynsCloset)

// 4.

//console.log(thomsCloset[0][0])

// 5.

// console.log(thomsCloset[1][0])

// 6.

//console.log(thomsCloset[2][2])

// 7.

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, ${thomsCloset[2][1]}`)

// 8.

thomsCloset[1].splice(2,1,'Footie Pajamas')
  // console.log(thomsCloset)

// IV. Functions

// A. printGreeting
// More practice couldn't hurt 
let printGreeting = function(name){
  return 'Hello there, ' + name + '!'
}
// console.log(printGreeting("Slimer"));

// B. printCool

let printCool = function (name) {
  return name + ' is cool'
}
//console.log(printCool('Captain Reynolds'))


// C. calculateCube

function calculateCube(n) { 
  return n * n * n;
} 

console.log(calculateCube(5))

// D. isVowel

function isVowel(char) {
  if (char.length ==1) {
    let vowels = new Array("a", "e", "i", "o", "u");
    let isVowel = false;

    for (let a in vowels) {
      if (vowels[a] == char.toLowerCase()) {
        isVowel = true;
      }
    }
    return isVowel;
  }
}
console.log(isVowel("A"))

// E. getTwoLengths

let first = []
let getTwoLengths = function(x,y){
  first.push(x.length)
  first.push(y.length)
  return first
}
console.log(getTwoLengths("Hank", "hippopopalous"));

// F. getMultipleLengths

let arrayStrings = ["hello" , "what", "is", "up", "dude"]
let getMultipleLengths = function(arrayStrings) {
  let stringLength = []
  for (let i = 0; i < arrayStrings.length; i++) {
    stringLength.push(arrayStrings[i].length)
  }
  return stringLength
}
console.log(getMultipleLengths(arrayStrings))

// G. maxOfThree

function get_max(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  return max;
}
console.log(get_max(6, 9, 1))

// Non math.max() way :)

//if else to find the max of three
//changing the three const, yeilds that it finds the max

const num1 = 6;
const num2 = 9;
const num3 = 1;

let largest;
if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log(largest)

// H. printLongestWord

//  Two methods to solve questions
//  const printLongestWord = (arr) => {
//   const sorted = arr.sort((a,b) => b.length = a.length)
//   return sorted[0]
// }
let arrayOfStrings = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
let printLongestWord = function(arrayOfStrings) {
  let longestWord = []
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestWord.length) {
      longestWord = arrayOfStrings[i]
    }
  }
  return longestWord
}
console.log(printLongestWord(arrayOfStrings))

// Objects

// A. Make a user object

let user = {
  name: "Matty",
  email : "Matty@Carmax.com",
  age : "30",
  purchased : []
}

// B. Update the user

  user.email = "Matty@GA.com";

  // user.age++ ;

  // console.log(user)

// C. Adding keys and values

  user.location = "Las Vegas"

  // console.log(user)

// D. Shopaholic!

// 1. "carbohydrates"

  user.purchased.push("carbohydrates");

// 2. "peace of mind"

  user.purchased.push("peace of mind");

// 3. "Merino jodhpurs"
  user.purchased.push("Merino jodhpurs");

// console.log(user)

// console.log(user.purchased[2])

// E. Object-within-object

  user.friend = {
    name: "Grace",
    age: 85,
    location : "Los Angeles",
    purchased : []
  }
  user.friend.age = 55;

// console.log(user.friend.name)
// console.log(user.friend.location)

// console.log(user.friend)

  user.friend.purchased.push("The One Ring");
  user.friend.purchased.push("A latte");

// console.log(user.friend.purchased[1])

// F. Loops

  for (let i = 0; i < user.purchased.length; i++){
    console.log("Matty's purchased item: " + user.purchased[i])
  }
  for (let i = 0; i < user.friend.purchased.length; i++){
    console.log("Grace's purchased item: " + user.friend.purchased[i])
  }

// G. Functions cab operate on objects

//1.

let updateUser = function(){
  user.age = ++user.age
  user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

// 2.

  let oldAndLoud = function(person) {
    person.age = ++person.age;
    person.name = person.name.toUpperCase()
  }
  oldAndLoud(user)
  //oldAndLoud(user.friend) checking to see if values change
  console.log(user)
  //console.log(user.friend) checking to see if values change