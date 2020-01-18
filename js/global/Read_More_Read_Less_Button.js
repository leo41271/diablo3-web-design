function seeMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("see_More");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "see more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "see less";
    moreText.style.display = "inline";
  }
}
