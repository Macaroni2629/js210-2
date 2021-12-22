// After Midnight Part 1
// We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function shown below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

// Examples:

const MIN_PER_HOUR = 60;

const HOURS_PER_DAY = 24;

function negTime(numberOfMin) {
  while (numberOfMin < 0) {
    numberOfMin += 1440;
  }

  return posTime(numberOfMin);
}

function posTime(numberOfMin) {
  let numberOfHours = Math.floor(numberOfMin / MIN_PER_HOUR);
  let remainderMin = numberOfMin % MIN_PER_HOUR;

  while (numberOfHours > HOURS_PER_DAY) {
    numberOfHours = Math.floor(numberOfHours / HOURS_PER_DAY);
  }

  numberOfHours = String(numberOfHours);
  remainderMin = String(remainderMin);
  
  return (numberOfHours.padStart(2, '0') + ':' + remainderMin.padEnd(2, '0'));
}

function timeOfDay(number) {
  if (number > 0) {
    return posTime(number);
  } else if (number < 0) {
    return negTime(number);
  } else {
    return "00:00";
  }
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(-4231));      // "01:29"