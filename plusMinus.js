// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal

function plusMinus(arr) {
	let pos = 0;
	let neg = 0;
	let zer = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			pos++;
		}
		if (arr[i] < 0) {
			neg++;
		}
		if (arr[i] === 0) {
			zer++;
		}
	}

	let posRatio = (pos / arr.length).toFixed(6);
	let negRatio = (neg / arr.length).toFixed(6);
	let zerRatio = (zer / arr.length).toFixed(6);

	console.log(posRatio);
	console.log(negRatio);
	console.log(zerRatio);
}

const x = [2, -3, 0, 1, -2, 10];

plusMinus(x);
