// Object for storing final data table
const date_time={};
// Getting all elements from table
const elements = Array.from(document.querySelectorAll(".time-entries-for-date"));
// Looping over these elements
const dateTime = elements.map((e)=>{
// Started converting time
let time = e.firstChild.lastChild.firstChild.innerText.split(":");
let hour = Number(time[0]);
// Rounding Minutes here, there may be small fraction errors due to rounding
let Minutes = Math.round(((Number(time[1] + "." + time[2])/60)*100));
// Combining minutes and hours
let combined_time = hour + ":" + Number(Minutes);
// Putting into object
date_time[e.firstChild.firstChild.firstChild.innerText] = combined_time;
});
// Showing data to you
console.table(date_time);