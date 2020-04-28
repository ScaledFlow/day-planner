var month = getMonth();
console.log(month);

var day = getDay();
console.log(day);

var year = getYear();
console.log(year);

var ord = getDayOrdinal();
console.log(ord);

var hour = getHour();
console.log(hour);

var numDay = getNumDay();
console.log(numDay);

$(document).ready(function () {
  $("#date-header").prepend(day + ", " + month + " " + numDay + ord);
});
