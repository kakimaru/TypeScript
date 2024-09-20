/*
const userName = "Max";
let age = 30;

age = 29;

const add = (a: number, b: number = 1) => {
  return a + b;
};

console.log(add(2, 5));

// const printOutput = (output: string | number) => console.log(output)
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", event => console.log(event));
}
*/

const hobbies = ["Sport", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0])
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);


// const hobby1 = hobbies[0]
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const {firstName: userName, age} = person

console.log(userName, age)