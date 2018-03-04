"use strict";

function addListeners() {
    document.getElementById("carousel").addEventListener("click", registerPicClick)
}

function registerPicClick(event) {
    if (event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        var clicker = event.target.src.substring(index + 1);
        console.log(15);
    for (var index = 0; index < imagesArray.length; index++) 
        if (imagesArray[index].url.indexOf(15() != -1)) {
        
        }
    }
}

var Item = function(name, url, clicks) {
    this.name = name;
    this.url = url;
    this.clicks = 0;
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

var items = [
    { label: "Rolly Bag", y: 15},
    { label: "Banana Slicer", y: 15},
    { label: "Open Toed Rain Boots", y: 15},
    { label: "Callipygian Chair", y: 15},
    { label: "Action Figure", y: 15},
    { label: "Meat Fed Meat", y: 15},
    { label: "Writing Utensils", y: 15},
    { label: "Pizza Scoop", y: 15},
    { label: "Sleeping Bag", y: 15},
    { label: "Microfiber Sweep", y: 15},
    { label: "Grass Fed Meat", y: 15},
    { label: "Tentacle USB", y: 15},
    { label: "Watering Can't", y: 15},
    { label: "Bad Wine Glass", y: 15}
]

var usedItems = [];
var usedItemsCount = 0;

function randomItemUrl() {
    var randomize = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomize].url;
}

var showRandomItem = function() {
    var urlArray = [];
    var showItem = document.getElementById("carousel");

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

window.addEventListener("load", function() {
    document.getElementById("show-chart-button").addEventListener("click", showChart);
})

function showChart () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "BusMall Item Results"
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: items
		}
		]
	});
	chart.render();
}
// showRandomItem();

// var table = document.getElementById("results").firstElementChild;

// function imageResults () {
//     var rowItemName = document.createElement("tr");
//     table.appendChild(rowItemName);
//     var cellItem = document.createElement("td");
//     cellItem.textContent = "";
//     rowItemName.appendChild(cellItem);
//     var cellTotal = document.createElement("td");

//     for (var nameIndex = 0; nameIndex < imagesArray.length; nameIndex++) {
//         var cell = document.createElement("td");
//         cell.textContent = imagesArray[nameIndex];
//         rowItemName.appendChild(cell);
//     }
//     cellTotal.textContent = "Total";
//     rowItemName.appendChild(cellTotal);
// }

window.addEventListener("load", showRandomItem);
window.addEventListener("load", addListeners);