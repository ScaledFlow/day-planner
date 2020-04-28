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

var timeOfDay = 0;

for (var i = 0; i < 9; i++) {
  timeOfDay = standardTime(i + 9);
  $("#plan-list").append(timeOfDay + " This is a test" + "<br>");
}

// $scope.timeValue += (hours >= 12) ? " P.M." : " A.M.";

console.log(standardTime(14));
