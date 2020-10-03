// Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
// Using a while loop, return an array that contains all odd numbers between 3 and 103
//  arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 18, use any loop.
// Use a loop to display the numbers 9 to 0 in descending order.
// Write a function computing the factorial of n
// Write a function using a for loop that returns the sum of all numbers from 1 to n.
// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ

// log 1-10
const oneThruTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
};

oneThruTen();

// odd #'s from 3 and 103
const oddNums = () => {
	let initial = 3;
	end = 103;
	oddArr = [];

	while (initial <= end) {
		oddArr.push(initial);
		initial += 2;
	}
	return oddArr;
};

oddNums();

// return sum of array
const arraySum = (num) => {
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += num[i];
	}
	return sum;
};

arraySum([1, 2, 3, 4]);

// Use a loop to display the numbers 9 to 0 in descending order.
let descendingNine = [];

for (let i = 9; i >= 0; i--) {
	descendingNine.push(i);
}

console.log(descendingNine.join(" "));

// Write a function computing the factorial of n
const factorial = (n) => {
	if (n === 0) return 1;

	let nums = [];

	for (let i = n; i > 0; i--) {
		nums.push(i);
	}

	let product = nums.reduce((a, b) => a * b);
	return product;
};

factorial(5); // gives back 120

// Write a function using a for loop that returns the sum of all numbers from 1 to n.
const adder = (n) => {
	let nums = [];

	for (let i = 0; i <= n; i++) {
		nums.push(i);
	}
	let sum = nums.reduce((a, b) => a + b);
	return sum;
};

adder(10);

// every second letter to 'Z'
const zee = (str) => {
	return str.split("").map((letter, index) => {
		return index % 2 === 1 ? (letter = "Z") : letter.toLowerCase();
	});
};

zee("donut");
