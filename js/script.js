// scripts.js

var a = prompt('a');
var b = prompt('b');
var value;
value = ( a * a ) - ( 2 * a * b ) + ( b * b );
console.log(value);
if (value < 0)
{
	console.log("ujemny");
}
if (value > 0)
{
	console.log("dodatni");
}
if (value == 0) {
	console.log("zero");
}
