// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

// For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is .

// Function Description

// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

// dayOfProgrammer has the following parameter(s):

// year: an integer
// Input Format

// A single integer denoting year .

// Constraints

// 1700 \le y \le 2700
// Output Format

// Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .


function dayOfProgrammer(year) {
    let adjustment = 0;
    if (year < 1918 && year % 4 === 0){
        adjustment = 1;
    } else if (year === 1918){
        adjustment = -13;
    } else if ((year > 1918) && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))){
        adjustment = 1;
    }

    let day = 256 - adjustment;
    const calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let index;

    for (let i = 0; i < calendar.length; i++){
        if (day < calendar[i]){
            index = i + 1;
            break;
        } else {
            day -= calendar[i]
        }
    }
    if (index < 10){
        index = 0 + index.toString();
    }
    const result = day + "." + index + "." + year;
    return result;
}

console.log(dayOfProgrammer(1918));