"use strict";

var counter = 0;

function addListeners() {
    document.getElementById("carousel").addEventListener("click", registerPicClick)
}

function registerPicClick(event) {
    if (event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        var url = event.target.src.substring(index + 1);
        for (var imageIndex = 0; imageIndex < imagesArray.length; imageIndex++) {
            var item = imagesArray[imageIndex];
            if (item.url.indexOf(url) !== -1) {
                item.y++;
            }
        }
        counter++;
        showRandomItem();
        // makes it so that as long as it doesn't have a remainder when divided by 15, it will show the chart again
        if (counter % 15 == 0) {
           showChart();
        } else {
            document.getElementById("chartContainer").innerHTML="";
        }
    }
}

var Item = function (name, url) {
    this.label = name;
    this.url = url;
    this.y = 0;

}

var imagesArray = [];
imagesArray.push(
    new Item("Rolly Bag", "images/bag.jpg"),
    new Item("Banana Slicer", "images/banana.jpg"),
    new Item("Open Toed Rain Boots", "images/boots.jpg"),
    new Item("Callipygian Chair", "images/chair.jpg"),
    new Item("Action Figure", "images/cthulhu.jpg"),
    new Item("Fresh Meat", "images/dragon.jpg"),
    new Item("Writing Utensils", "images/pen.jpg"),
    new Item("Pizza Scoop", "images/scissors.jpg"),
    new Item("Sleeping Bag", "images/shark.jpg"),
    new Item("Microfiber Sweep", "images/sweep.jpg"),
    new Item("Grass Fed Meat", "images/unicorn.jpg"),
    new Item("Tentacle USB", "images/usb.jpg"),
    new Item("Watering Can", "images/water_can.jpg"),
    new Item("Bad Wine Glass", "images/wine_glass.jpg")
)

function randomItemUrl() {
    var randomize = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomize].url;
}

var showRandomItem = function () {
    var urlArray = [];
    var showItem = document.getElementById("carousel");
    showItem.innerHTML = "";
    while (urlArray.length != 3) { 
        var currentUrl = randomItemUrl();
        if (urlArray.indexOf(currentUrl) == -1) {
            urlArray.push(currentUrl);
        }
    };
    for (var index = 0; index < urlArray.length; index++) {
        var img = document.createElement("img");
        img.setAttribute("src", urlArray[index]);
        showItem.appendChild(img);
    }
}

showRandomItem();

window.addEventListener("load", addListeners);
window.addEventListener("load", function() {
    document.getElementById("show-chart-button").addEventListener("click", showChart);
})

function showChart() {
	var chart = new CanvasJS.Chart("chartContainer",
	{
        
      data: [
      {
        type: "line",
        dataPoints: imagesArray
      }
      ]
    });

 chart.render();

var chartType = document.getElementById('chartType');
chartType.addEventListener("change",  function() {
  chart.options.data[0].type = chartType.options[chartType.selectedIndex].value;
  chart.render();
});
}