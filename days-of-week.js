// Days of the week are represented as three-letter strings 
// ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"). 
// Write a javaScript function solution that, given a string S 
// representing the day of the week and an integer K (between 0 and 500), 
// returns the day of the week that is K days later. For example, 

// given S = "Wed" and K = 2, the function should return "Fri". 
// Given S = "Sat" and K = 23, the function should return "Mon".

function daysOfTheWeek (s, K){
    const remainder = K % 7;
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const start = days.indexOf(s);
    const endIndex = (remainder+start) % 7
    const end = days[endIndex];
    return end;
}

console.log(daysOfTheWeek("Sat", 23));