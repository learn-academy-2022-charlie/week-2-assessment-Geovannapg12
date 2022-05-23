// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: I believe it will log the string but with each letter separated from each other, I think the .split only works on arrays or its a way to turn a string into an array.
// b) Verify and explain: " .split("") Converts a string into an array". Between accesors and mutators I was kind of confused with what they do. I was right though it does turn a string into an array and it does separate each letter.


// --------------------2) What will this log?

const greeter = (name) => {
`Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: It will show "hello LEARN student" the variable greeter is used in the string interpolation, when its run in the console.log it will show what is written inside the paranthesis.

// b) Verify and explain: I was not paying attention again, it doesn't have the return! But when I add it to the function it does log what I thought it would. I used an example from the syllabus to compare them after getting an undefined at first.

// const greeting = (name) => {
//   return `Hello there ${name}!`
// }
// console.log(greeting("Matt"))

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: I think this will multipy the values inside of the array by 2.

// b) Verify and explain: It did multipy the values by 2. I was a bit confused by the .map but looking at the rest of the function I guided myself. "The .map() function iterates through an array and returns a new array of the same length."


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: It will return the odd numbers.


// b) Verify and explain: I was right it does return the odd numbers. It's a bit confusing to explain. It will give odd numbers because  % divided by 2 will check for a remainder, strictly equals === 0  means the number is even, the bang operator is used to indicate that it does not equal 0 that there is a remainder making it an odd number.
  // % its called Modulo Operator "returns the whole number remainder of a division problem." ! "The logical not is denoted by a bang operator that sets the logical opposite."


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I thought it would return 0, BUT thinking about it now, it might have something to do with the index so it will return "JavaScript"

// b) Verify and explain: It did return "JavaScript". I think I was a bit confused with the zero. After looking back at my notes and syllabus, javascript is indicated at the 0 index of the languages array
  // const lunch = {
  //   name: "PB and Banana",
  //   type: "sandwich",
  //   ingredients: ["bread", "peanut butter", "banana"]
  // }
  // console.log(lunch.ingredients[0])

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will log the name George in student
// b) Verify and explain: So if I undestand correctly, by creatimg a variable and assign it to the the class name it can make changes
// creating the instance of the class, saved as a variable
// rocky now has access to the class methods
var rocky = new Squirrel()
