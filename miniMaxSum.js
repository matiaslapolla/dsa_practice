/* Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single 
line of two space - separated long integers.
*/

function sum(arr) {
	let maxSum = 0;
	let minSum = 0;

	arr.sort((a, b) => b - a);

	for (let i = 0; i < arr.length - 1; i++) {
		maxSum += arr[i];
	}

	arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length - 1; i++) {
		minSum += arr[i];
	}

	console.log(minSum, maxSum);
}

sum([1, 2, 3, 4, 5]);
