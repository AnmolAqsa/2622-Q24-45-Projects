/*
Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

* Tests for equality and inequality with strings

* Tests using the lower case function

* Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

* Tests using "and" and "or" operators

* Test whether an item is in a array

* Test whether an item is not in a array
*/
var num2 = 76;
console.log(num2 > 58);
console.log(num2 < 68);
console.log(num2 == 76);
console.log(num2 !== 76);
console.log(num2 >= 58);
console.log(num2 <= 68);
var weather = "Rainy";
console.log(weather == "Rainy" && weather !== "Rainy");
console.log(weather == "Cloudy" || weather == "Sunny" || weather == "Drizling" ||
    weather == "Seawing" || weather !== "Sunny");
var personName = "Atif";
console.log(personName == "Atif");
console.log(personName == "Atif");
var myArr = [1, 2, 3, 4, 5];
myArr.map((function (item) {
    return [console.log(item = 5)];
}));
var myArr1 = [1, 2, 3, 4, 5];
myArr1.map((function (item) {
    return [console.log(item = 6)];
}));
var number = 88;
console.log(number == 88);
console.log(number === 88);
