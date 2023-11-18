/* 
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each 
year of their total age. They will only be able to blow 
out the tallest of the candles. Count how many candles are tallest.

Example

candles = [4,2,1,4]

The maximum height candles are 4 units high. 
There are 2 of them, so return 2.

Function Description
Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):
int candles[n]: the candle heights

Returns
int: the number of candles that are tallest

Input Format
The first line contains a single integer N , the size of candles.

The second line contains N space-separated integers, 
swhere each integer I describes the height of candles[i].

*/

function candlesCount(candles) {
	let tallest = 0;
	let count = 0;

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] > tallest) {
			count = 0;
			tallest = candles[i];
			count++;
		} else if (candles[i] === tallest) {
			count++;
		}
	}

	return count;
}

candlesCount([4, 2, 1, 4, 8, 9, 1, 4, 10, 3, 10]);
