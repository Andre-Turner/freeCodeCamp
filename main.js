
/*
var a; // Declaring a variable

var b = 2; // Assigning a variable

a = 7; // Assigned 7 to A
b = a; // Assign a to B

// Initializing a variable to an initial value
var a = 9;


// Unitialized Variables

var a;
var b;
var c;

//

a = a + 1;

b = b + 5;

c = c + " String!";
*/

/*
// Unitialized Variables Answered

var a = 5;
var b = 10;
var c = "I am a ";

//

a = a + 1;

b = b + 5;

c = c + " String!";

// MATH

// Adding Numbers

var sum = 10 + 10;

// Subtracting Numbers

var difference = 45 - 33;

// Multiplying Numbers

var product = 8 * 10;

// Dividing Numbers 

var quotient = 66 / 33;

// Incrementing number

var myVar = 87;

// Code Below

myVar++;

// Decrementing Numbers

var myVar = 11;

//  Code Below

myVar--;

// Decimal

var  ourDecimal = 5.7;

// Code Below

var myDecimal = 0.009

// Multiply Decimals

var product = 2.0 * 2.5;
console.log(product);

// Divide Decimals
var quotient = 4.4 / 2.0;

// Finding a Remainder

var remainder;
remainder = 11 % 3;

// Compound Assignment with Augmented Addition

var a = 3;

var b = 17;

var c = 12;

// Shortcut for adding

a += 12;

b += 9;

c += 7;

// Compound Assignment with Augmented Subtraction

var a = 11;

var b = 9;

var c = 3;

// Shortcut for subtracting

a -= 6;

b -= 15;

c -= 1;

// Compound Assignment with Augmented Multiplication

var a = 5;

var b = 12; 

var c = 4.6;

// Shortcut for multiplication

a *= 5;

b *= 3;

c*= 10;

// Declare String Variables

var firstName = 'Andre';
var lastName = 'Turner';

*/

/*
// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes";

console.log(myStr);

// Quoting Strings with Single Quotes

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Concatenating Strings with Plus Operator

var ourStr = "I come first. " + "I come second.";

console.log(ourStr);

// Concentating Strings with Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second."; // += takes whatever is on the end and add it the variable.

// Constructing Strings With Variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

console.log(ourStr);

// Length of a String
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Finding length of A String

//EXAMPLE

var firstNameLength = 0;
var firstName = "Andre";

firstNameLength = firstName.length;

console.log(firstNameLength);

// Bracket Notation to find String 1st Character

var firstLetterOfFirstName = ""
var firstName = "Andre";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

// String Immutability (Can't be altered once created)
var myStr = "Jello World";

myStr[0] = "H";

// Example of String Immutability

myStr = "Hello World"; // Had to type out the correct string to change the J in Jello to H
console.log(myStr);

// Bracket Notation to Find Nth Charac in String
var firstName = "Andre";
var secondLetterOfFirstName = firstName[1];
var thirdLetterOfLastName = LastName[2];

//Bracket Notation to find Last Charac in String
var firstName = 'Andre';
var lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(lastLetterOfFirstName);

*/

// Store Multiple Values with Arrays
var ourArray = ["Andre", 28];

// Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101000]];

// Access Array Data with Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0]; // Equals 50
console.log(ourData);

// Modify Array Data with Indexes

var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99]
console.log(ourArray);

// Access Multi - Dimensional Arrays w/ Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];

var myData = myArray[2][1];
console.log(myData);

// Manipulate Arrays with push
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

// Array now Equals =
["Stimpson", "J", "cat", ["happy", "joy"]];

// Manipulate Array with pop (Removes last element)

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
console.log(removedFromOurArray);

//Manipulate Array with Shift (removes first element)
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift()
//removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]


// Manipulate Array with unshift(Add a element to the beginning of array)

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
//ourArray now equals ["Happy", "J", "cat"]

// Shopping list (Nested Array Example)

var myList = [["cereal", 3], ["milk, 2"], ["bananas", 3], ["Eggs", 12], ["bread", 4]];
console.log(myList);

// Write Reusable Code with Functions
function ourReusableFunction() {
    console.log("Heyya, World")
}

ourReusableFunction(); // Don't Have to console.log

//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a,b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5); // Outputs 5

// Global Scope and Functions
var myGlobal = 10;


function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope  (only visible inside function)
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

//console.log(myVar); // Error because myVar can't be assessed outside of function


// GLOBAL VS LOCAL SCOPE IN FUNCTIONS

var outerWear = "T-Shirt"

function myOutfit() {
   var outerWear = "sweater"; // Local scope will take precedence because it is declared inside function

   return outerWear;
}

console.log(myOutfit()); // output will show on console log because of global scope can be declared outside of function but then be overwritten by "sweater" because local scope is declared inside of function

