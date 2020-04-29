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

for (i = 9; i < 18; i++) {
  if (i === x + 1) {
    var textArea = $("#" + i).attr({
      class: "present",
    });
  } else if (i > x) {
    var textArea = $("#" + i).attr({
      class: "future",
    });
  }
}

function savePlan(time) {
  console.log(timeSafe);
}

$(document).ready(function () {
  $(".btn-choice").on("click", function () {
    var yourPick = $(this).val();
    console.log("Your Pick: " + yourPick);
  });
});
// $(document).ready(function() {

// $("#random-button").on("click", function () {
//   console.log("clicked");
// });

// console.log(standardTime(9));
