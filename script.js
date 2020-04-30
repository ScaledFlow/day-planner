// set variables
var month = getMonth();
var day = getDay();
var year = getYear();
var ord = getDayOrdinal();
var hour = getHour();
var numDay = getNumDay();
var lastAccessDay = "";
var currentAccessDay = "";
var dayPlanRetrieve;
var dayPlan = ["", "", "", "", "", "", "", "", ""];
init();

//removeLocalStorage();
//clearDayPlan();

function init() {
  // determine if the site has been accessed today
  lastAccessDay = localStorage.getItem("lastAccessed", day);
  if (lastAccessDay === null) {
    localStorage.setItem("lastAccessed", getNumDay());
  } else {
    if (lastAccessDay != getNumDay()) {
      localStorage.setItem("lastAccessed", getNumDay());
      clearDayPlan();
    } else {
      getLocalStore();
      populatePlan();
    }
  }

  // color code the text areas  to differentiate past present and future
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

  // set time and date on header
  $(document).ready(function () {
    $("#date-header").prepend(day + ", " + month + " " + numDay + ord);
  });
}

// clear the day planner array if site has not been accessed since yesterday
function clearDayPlan() {
  // clear array
  for (i = 0; i < dayPlan.length; i++) {
    dayPlan[i] = "";
  }
  setLocalStore();
  getLocalStore();
}

function setLocalStore() {
  localStorage.setItem("dayPlan", JSON.stringify(dayPlan));
}

function getLocalStore() {
  var dayPlanRetrieveData = localStorage.getItem("dayPlan");
  var dayPlanRetrievePlan = JSON.parse(dayPlanRetrieveData);
  dayPlan = dayPlanRetrievePlan;
  localStorage.setItem("dayPlan", JSON.stringify(dayPlan));
}
var dayPlanHolder = "";
function populatePlan() {
  for (i = 0; i < 9; i++) {
    dayPlanHolder = dayPlan[i];
    if (dayPlanHolder != "null") {
      $("#" + (i + 9)).append(dayPlan[i]);
    }
  }
}

// save plan description to dayPlan array on click event.
$(document).ready(function () {
  $(".btn-choice").on("click", function () {
    var yourPick = $(this).val();
    // retrieve description in corresponding field
    dayPlan[yourPick - 9] = $("#" + yourPick).val();
    setLocalStore();
  });
});

// function for testing
function savePlan(time) {}

// function for testing
function removeLocalStorage() {
  localStorage.removeItem("lastAccessed");
}
