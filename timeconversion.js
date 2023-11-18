/*07:05:45PM
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
string s: a time in  hour format
Returns
string: the time in  hour format
Input Format
A single string  that represents a time in -hour clock format (i.e.:  or ).
Constraints
All input times are valid
Sample Input 0
07:05:45PM
Sample Output 0
19:05:45
*/

function timeConversion(s) {
	let time = s.split(":");
	let hour = time[0];
	let min = time[1];
	let sec = time[2].substring(0, 2);
	let format = time[2].substring(2, 4);
	let newHour;
	if (format === "AM") {
		if (hour === "12") {
			newHour = "00";
		} else {
			newHour = hour;
		}
	} else {
		if (hour === "12") {
			newHour = "12";
		} else {
			newHour = parseInt(hour, 10) + 12;
		}
	}
	return newHour + ":" + min + ":" + sec;
}
