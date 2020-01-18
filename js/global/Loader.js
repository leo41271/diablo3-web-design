var myVar;

function Loading() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadDiv").style.display = "block";
}
