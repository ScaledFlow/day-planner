var month = getMonth();
console.log(month);

var day = getDay();
var year = getYear();
var ord = getDayOrdinal();
var hour = getHour();
var numDay = getNumDay();

$(document).ready(function () {
  $("#date-header").prepend(day + ", " + month + " " + numDay + ord);
});

var x = 0;
x = getHour();
console.log(x);

for (i = 9; i < 18; i++) {
  if (i === x) {
    var textArea = $("#" + i).attr({
      class: "present",
    });
  } else if (i > x) {
    var textArea = $("#" + i).attr({
      class: "future",
    });
  }
}

console.log(standardTime(9));
