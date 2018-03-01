"use strict";

function addListeners() {
    document.getElementById("carousel").addEventListener("click", registerPicClick)
}

function registerPicClick(event) {
    if (event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        console.log(event.target.src.substring(index + 1));
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

var usedItems = [];
var usedItemsCount = 0;

function randomItemUrl() {
    var randomize = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomize].url;
}

var urlArray = [];

var showRandomItem = function() {
    var number = Math.floor(Math.random() * (imagesArray.length));
    // var currentUrl = randomItemUrl();
    // if (urlArray.indexOf(currentUrl) == -1) {
    //     urlArray.push(currentUrl);
    // }


    if (!usedItems[number]) {
        document.getElementById("carousel").src = imagesArray[number];
        usedItems[number] = true;
        usedItemsCount++;
        if (usedItemsCount == imagesArray.length){
            usedItemsCount = 0;
            usedItems = [];
        }
    } else {
        showRandomItem();
    }
 }

window.addEventListener("load", addListeners);
