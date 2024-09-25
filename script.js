// ============================================================
// Part One

const numbers = [5, 4, 39, 42, 9];

//Take an array of numbers and return the sum.
function sumOfArray(arr) {
  let sum = 0;
  return (sum = arr.reduce((total, current) => total + current, sum));
}

console.log(sumOfArray(numbers));

//Take an array of numbers and return the average.
function avgOfArray(arr) {
  let sum = arr.reduce((total, current) => total + current);

  return (avg = sum / arr.length);
}

console.log(avgOfArray(numbers));

//Take an array of strings and return the longest string.
const wordList = [
  "burger",
  "french fries",
  "milkshake",
  "chicken tenders",
  "bbq sauce",
];

function printLongestWord(words) {
  let longestWord = "";
  return (longestWord = words.reduce((savedWord, nextWord) =>
    savedWord.length > nextWord.length ? savedWord : nextWord
  ));
}

console.log(printLongestWord(wordList));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
const wordList2 = [
  "burger",
  "french fries",
  "milkshake",
  "chicken tenders",
  "bbq sauce",
];

function stringsLongerThanNumber(arr, int) {
  return arr.filter((word) => word.length > int);
}

console.log(stringsLongerThanNumber(wordList2, 9));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printByGivenNumber(n) {
  let startingNumber = 1;
  if (n === 0) {
    return;
  } else {
    console.log(n);
    printByGivenNumber(n - 1);
  }
}

printByGivenNumber(5);

// ============================================================
// Part Two

const newArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age

const ageSort = newArray.sort(function (ageOne, ageTwo) {
  if (Number(ageOne.age) > Number(ageTwo.age)) {
    return 1;
  } else {
    return -1;
  }
});
console.log(ageSort);

// Filter the array to remove entries with an age greater than 50

const filterArrayOverAge50 = newArray.filter(function (person) {
  if (person.age < 50) {
    return true;
  }
});
console.log(filterArrayOverAge50);

// Map the array to change the “occupation” key to “job” and increment every age by 1.

const jobKey = newArray.map(function (object) {
  object["job"] = object["occupation"];
  delete object["occupation"];
  object.age++;
  return object;
});

console.log(jobKey);

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
sumOfNewArray = newArray.reduce(function (total, obj) {
  let newSum = 0;
  return (newSum = total + obj.age);
}, 0);

console.log(sumOfNewArray);

let avgAgeOfArray = sumOfNewArray / newArray.length;

console.log(avgAgeOfArray);

// ============================================================
// Part 3: Thinking Critically

// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
function incrementObjectAge(array, n) {
  array.map(function (person) {
    person.age += n;
    return person;
  });
  return array;
}
console.log("Take an object and increment its age field.");
console.log(incrementObjectAge(newArray, 6));

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyObjectAndAdd(originalArr, n) {
  let copyOfArray = JSON.parse(JSON.stringify(originalArr));
  copyOfArray.map(function (person) {
    person.age += n;
    return person;
  });
  return copyOfArray;
}
console.log(
  "Take an object, make a copy, and increment the age field of the copy. Return the copy."
);
console.log(copyObjectAndAdd(newArray, 5));

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
