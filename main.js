


/** -------------------------------------------------------------------ex1 - Refactor with function-------------------------------------------------------------------- */

function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let item of cart) {
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
}


let shoppingCart = [
    { name: "Apples", price: 2.5, quantity: 3 },
    { name: "Bananas", price: 1.5, quantity: 2 },
    { name: "Oranges", price: 3, quantity: 1 },
];

console.log("Total price:", calculateTotalPrice(shoppingCart));

/** -------------------------------------------------------------------ex2 - Clone with spread-------------------------------------------------------------------- */

let originalArray = [1, 2, 3, 4, 5];

function updateArray(originalArray, index, newValue) {
    let newArray = [ ...originalArray];

    newArray[index] = newValue;

    return newArray;
}

const changedArray = updateArray(originalArray, 2, 100);
console.log(originalArray);
console.log(changedArray);

/** -------------------------------------------------------------------ex3 - Fix bugs-------------------------------------------------------------------- */

function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    //   console.log(sum);
    }
    return sum / numbers.length;
  }

  let scores = [85, 90, 75, 95, 80];
  let averageScore = findAverage(scores);
  console.log("Average score:", averageScore);

/** -------------------------------------------------------------------ex4 - Filter map reduce operations-------------------------------------------------------------------- */

let numbers = [1, 2, 3, 4, 5];

function filterEvenNumbers(arr) {
    let arrFilter = arr.filter((item) => item % 2 === 0);
    return arrFilter;
}

function squareNumbers(arr) {
    let arrSquare = arr.map((item) => item * item);
    return arrSquare;
}

function sumArray(arr) {
    arrSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return arrSum;
}

console.log("Even numbers:", filterEvenNumbers(numbers));
console.log("Squared numbers:", squareNumbers(numbers));
console.log("Sum of numbers:", sumArray(numbers));

/** -------------------------------------------------------------------ex5 - Clone and update with spread-------------------------------------------------------------------- */

let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    const indexToUpdate = studentsArray.findIndex((item) => item.id === idToUpdate);
    if (indexToUpdate !== -1) {
        let newStudents = [...studentsArray];
        newStudents[indexToUpdate].grade = newGrade;
        return newStudents;
    }
    else {
        console.log("Student not found!");
        return studentsArray;
    }
}

console.log("Original students array:");
console.log(students);

let updatedStudents = updateStudentGrade(students, 2, "A");

console.log("\nUpdated students array:");
console.log(updatedStudents);