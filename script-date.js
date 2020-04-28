function getMonth() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  return n;
}

function getNumDay() {
  var d = new Date();
  var n = d.getDate();
  return n;
}

function getDay() {
  var month = new Array();
  month[0] = "Sunday";
  month[1] = "Monday";
  month[2] = "Tuesday";
  month[3] = "Wednesday";
  month[4] = "Thursday";
  month[5] = "Friday";
  month[6] = "Saturday";
  var d = new Date();
  var n = month[d.getDay()];
  return n;
}

function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  return n;
}

function getDayOrdinal(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function getHour() {
  var d = new Date();
  var n = d.getHours();
  return n;
}
