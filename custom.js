// *Question1:* 
let name = "John";
let age = 25;

console.log("My name is " + name + " and I am " + age + " years old");
document.write(`My name is ${name} and <br>I am ${age} years old`);




// *Question2:* 
let num = 7;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}



// *Question3:* 
for (let i = 1 ; i <= 5 ; i++ ){
    console.log(i);
    
}




// *Question4:* 
function myNumbers(num1, num2) {
    return num1 + num2; 
  }

  let result = myNumbers(3, 7);
  
console.log(result);


// *Question5:* 
let fruits = ["apple" , "banana" , "cherry"];

fruits.push("orange");

console.log("The first fruit is:", fruits[0]);
console.log("The first fruit is:", fruits.length);


// *Question6:* 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number * 2);
  });




// *Question7:* 
const button = document.getElementById("changeText");
const heading = document.getElementById("heading");


button.addEventListener("click", function () {
  heading.textContent = "You clicked the button!";
});



// *Question8:* 
let word = "hello world";

console.log(word.toUpperCase());


// *Question9:* 
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
      return `Hello, my name is ${this.name}.`;
    }
  };
  

  console.log(person.greet());
  