// This is a staircase of size n= 4
// Its base and height are both equal to n.
// It is drawn using '#' symbols and spaces.
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

function staircaseDetail(n) {
	let matrix = new Array(n).fill("").map(() => new Array(n).fill(" "));

	for (let i = 0; i < matrix.length; i++) {
		for (let j = matrix[i].length - 1; j >= matrix.length - i - 1; j--) {
			matrix[i][j] = "#";
		}
	}

	matrix.forEach((row) => console.log(row.join("")));
}

staircaseDetail(4);
