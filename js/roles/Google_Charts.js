// <div id="piechart"></div>
// <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "All Roles of Usage rate"],
    ["Barbarian", 25],
    ["Crusader", 10],
    ["Demon Hunter", 5],
    ["Monk", 6],
    ["Wizard", 4],
    ["Witch Doctor", 2],
    ["Necromancer", 1]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "All Roles of Usage rate",
    width: 400,
    height: 300,
    backgroundColor: "#090909",
    titleTextStyle: { color: "#FFF", fontSize: 16 },
    legend: { position: "right", textStyle: { color: "#fff" } },
    is3D: true
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
  //   google chart
  //   https://developers.google.com/chart/interactive/docs/gallery/piechart#data-format
  //   Google Chart Background Color
  //   https://stackoverflow.com/questions/8808100/google-chart-background-color
}
