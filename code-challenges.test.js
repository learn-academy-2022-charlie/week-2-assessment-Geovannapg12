// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// create a test called mult 3
// it will return numnbers multiplied by three

describe ("mult3", () => {
  it ("returns a number as an argument and decides if the number is evenly divisble by three or not.", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    expect(mult3(num1)).toEqual("15 is divisible by three")
    expect(mult3(num2)).toEqual("0 is divisible by three")
    expect(mult3(num3)).toEqual("-7 is not divisible by three")
  })
})

//I got red
const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

 // Create a function named mult3
 // The function will take a number as an argument (num)
 // The function will decide if the num is divisible by 3
 // if the number is evenly divisble by 3 return "num is not divisible by three"
 // If its not return "num is not divisble by three"
  const mult3 = (num) => {
    if (num % 3 === 0){
      return `${num} is divisible by three`
    } else if (num % 3 !== 0) {
      return `${num} is not divisible by three`
    }
  }
console.log(mult3(15))
console.log(mult3(-7))

//It passed

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Create a test with the name capital
// expect the string in the arrays in capital letters

describe ("capital", () => {
  it ("returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    expect(capital(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    expect(capital(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

  })
})
  //I got red

// b) Create the function that makes the test pass.

//create a fucntion that will take an array of strings
// use method .map() to itireate through the array
//  Use a method .toUpperCase  will turn the array into upper case


 const capital = (array) => {
   let myArray = array.map( value =>{
     return value[0].toUpperCase() + value.substring(1)
   })
   return myArray.join(" ")
 }
 console.log(capital(randomNouns1))
 console.log(capital(randomNouns2))
//I got green

//For this problem I used a syllabus problem that had the same prompt. .substring method extracts characters from start to end, but I think I need a little more explanation to how this whole thing works



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//create a test with the name index
//it returns index of first vowel
//expect 1, 0, 2
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe ("index", () => {
  it ("returns the index of the first vowel.", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect(index(vowelTester1)).toEqual(1)
    expect(index(vowelTester2)).toEqual(0)
    expect(index(vowelTester3)).toEqual(2)
  })
})

//I got red

// b) Create the function that makes the test pass.
 const index => (string) {
  let value = string.indexOf(a, e, i, o, u)
}
console.log(index(vowelTester1)
// This did not work and now that I look at it maybe this is not the route to go
// I wanted to use .filter to find the values I needed, but i need to turn in into an array and then figure out how I am gonna get the vowels there. I need more explination
