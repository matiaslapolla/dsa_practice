function diagonalDifference(matrix) {
	let primarySum = 0;
	let secondarySum = 0;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i === j) {
				primarySum += matrix[i][j];
			}

			if (i === matrix.length - j - 1) {
				console.log(matrix[i][j]);
				secondarySum += matrix[i][j];
			}
		}
	}

	let difference = Math.abs(primarySum - secondarySum);

	return difference;
}

const m = [
	[2, 3, 2],
	[3, 3, 4],
	[1, 3, 3],
];

console.log(diagonalDifference(m));
