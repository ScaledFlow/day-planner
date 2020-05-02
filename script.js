// set variables
var month = getMonth();
var day = getDay();
var year = getYear();
var ord = getDayOrdinal();
var hour = getHour();
var numDay = getNumDay();
var lastAccessDay = "";
var dayPlanRetrieve;
var dayPlan = ["", "", "", "", "", "", "", "", ""];
init();

// Functions removeLocalStorage(); and clearDayPlan(); are for testing code and commented out here.
// removeLocalStorage();
// clearDayPlan();

// Initialize the site by checking if it is a new day.
// If it is a new day, clear the dayPlan array.
// If it is the same day as the site was last accessed, restore the dayPlan array from local storage.
function init() {
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

  // Color code the text areas  to differentiate past present and future.
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

  // Set time and date on header.
  $(document).ready(function () {
    $("#date-header").prepend(day + ", " + month + " " + numDay + ord);
  });
}

// Clear the day planner array if site has not been accessed since yesterday.
function clearDayPlan() {
  // clear array
  for (i = 0; i < dayPlan.length; i++) {
    dayPlan[i] = "";
  }
  setLocalStore();
  getLocalStore();
}

// Stringify dayPlan array to local storage.
function setLocalStore() {
  localStorage.setItem("dayPlan", JSON.stringify(dayPlan));
}

// Retreive stringified dayPlan array from local storage.
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

// Save plan description to dayPlan array on click event.
$(document).ready(function () {
  $(".btn-choice").on("click", function () {
    var yourPick = $(this).val();
    // retrieve description in corresponding field
    dayPlan[yourPick - 9] = $("#" + yourPick).val();
    setLocalStore();
  });
});

// Function for testing.
function savePlan(time) {}

// Function for testing
function removeLocalStorage() {
  localStorage.removeItem("lastAccessed");
}
