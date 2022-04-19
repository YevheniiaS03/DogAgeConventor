const myAge = prompt("Please give your age");
//it equal to your age as a number.
let earlyYears = 2;
// dog's first 2 years
earlyYears *= 10.5;
let laterYears = myAge - 2;
// after counting dog's first 2 years we go to the later years
laterYears *= 4;
//to calculate the number of dog years accounted for by your later years
var myAgeInDogYears = earlyYears + laterYears;
var myName = "Jane".toLowerCase();
document.write(
  `My name is ${myName}. I am ${myAge}years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
