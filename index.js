function goToAddPage() {
  window.location.href = "Add.html";
}
function goToUpdateDeletePage() {
  window.location.href = "UpdateDelete.html";
}
function goToReportPage() {
  window.location.href = "Report.html";
}
function goToSearchPage() {
  window.location.href = "Search.html";
}
function goToAboutPage() {
  window.location.href = "About.html";
}
function goToContactPage() {
  window.location.href = "Contact.html";
}
/* Toggle between adding and removing the "responsive" class to navigation when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}
