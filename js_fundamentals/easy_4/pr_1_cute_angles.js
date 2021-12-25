// Cute Angles
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Examples:

const MIN_PER_DEGREE = 60;

const SEC_PER_MINUTE = 60;


function getDegrees(floatNum) {
  let stringNum = String(floatNum);
  let parsed = parseInt(stringNum);
  return parsed;
}

function getMinutes(decimal) {
  let minutes = decimal * 60;
  return Math.floor(minutes);
}

function getSeconds(decimal) {
  let a = decimal * 60;
  let residual = a - Math.floor(a);
  let answer = residual * 60;
  return parseInt(answer);
}

function dms(floatNum) {
  let degrees = getDegrees(floatNum);
  
  let decimal = floatNum - Math.floor(floatNum);
  
  let minutes = getMinutes(decimal);
  
  let seconds = getSeconds(decimal);
  
  return degrees + "°" + minutes + "'" + seconds + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

// Discussion
// The tricky part with this exercise is the mathematical component. That said, there are websites that provide details on how to compute this.

// This solution computes the degreesInt component by flooring the input to remove the decimal component. It computes the minutes component by subtracting from the input the degreesInt component, and then multiplying the result by MINUTES_PER_DEGREE. Lastly, it computes the seconds component by subtracting from the input the degreesInt and minutes divided by MINUTES_PER_DEGREE, and then multiplying the result by SECONDS_PER_DEGREE. For both the minutes and seconds components, the solution subtracts from the input to get the value of the decimal components, which it multiplies with their respective conversion factors.

// The next part, which is more programmatic in nature, is the formatting of the string output. The solution uses a helper function to pad a zero to the left of any single-digit numbers. The return value of the dms function is a string that includes padded values and the DEGREE variable. The DEGREE variable holds the hexadecimal escape sequence representing the degree symbol.

// Further Exploration
// The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive). Can you refactor it so that it works with any positive or negative number?

// Our solution returns the following results for inputs outside the range 0-360:

const MIN_PER_DEGREE = 60;

const SEC_PER_MINUTE = 60;


function getDegrees(floatNum) {
  let stringNum = String(floatNum);
  let parsed = parseInt(stringNum);
  return parsed;
}

function getMinutes(decimal) {
  let minutes = decimal * 60;
  return Math.floor(minutes);
}

function getSeconds(decimal) {
  let a = decimal * 60;
  let residual = a - Math.floor(a);
  let answer = residual * 60;
  return parseInt(answer);
}

function dealWithNeg(floatNum) {
  let num = Math.abs(floatNum);
  let currentNum = 360 - num;
  
  currentNum < 0 ? currentNum = 360 + currentNum : currentNum;
  return currentNum;
}

function dealWithBig(floatNum) {
  while (floatNum > 360) {
    floatNum -= 360;
  }
  return floatNum;
}

function dms(floatNum) {
  if (floatNum < 0) {
    floatNum = dealWithNeg(floatNum);
  }
  
   if (floatNum > 360) {
    floatNum = dealWithBig(floatNum);
  }
  

  let degrees = getDegrees(floatNum);
  
  let decimal = floatNum - Math.floor(floatNum);
  
  let minutes = getMinutes(decimal);
  
  let seconds = getSeconds(decimal);
  
  return degrees + "°" + minutes + "'" + seconds + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"