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

function standardTime(calcHour) {
  var hour = new Array();
  hour[0] = "12 AM";
  hour[1] = "1 AM";
  hour[2] = "2 AM";
  hour[3] = "3 AM";
  hour[4] = "4 AM";
  hour[5] = "5 AM";
  hour[6] = "6 AM";
  hour[7] = "7 AM";
  hour[8] = "9 AM";
  hour[9] = "9 AM";
  hour[10] = "10 AM";
  hour[11] = "11 AM";
  hour[12] = "12 PM";
  hour[13] = "1 PM";
  hour[14] = "2 PM";
  hour[15] = "3 PM";
  hour[16] = "4 PM";
  hour[17] = "5 PM";
  hour[18] = "6 PM";
  hour[19] = "7 PM";
  hour[20] = "8 PM";
  hour[21] = "9 PM";
  hour[22] = "10 PM";
  hour[23] = "11 PM";
  var n = hour[calcHour];
  return n;
}
