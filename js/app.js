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

var imagesArray = [
    {name: "Bag", image: "images/bag.jpg" },
    {name: "Banana", image: "images/banana.jpg"},
    {name: "Boots", image: "images/boots.jpg"},
    {name: "Chair", image: "images/chair.jpg"},
    {name: "Cthulhu", image: "images/cthulhu.jpg"},
    {name: "Dragon", image: "images/dragon.jpg"},
    {name: "Pen", image: "images/pen.jpg"},
    {name: "Scissors", image: "images/scissors.jpg"},
    {name: "Shark", image: "images/shark.jpg"},
    {name: "Sweep", image: "images/sweep.jpg"},
    {name: "Unicorn", image: "images/unicorn.jpg"},
    {name: "USB", image: "images/usb.jpg"},
    {name: "Water Can", image: "images/water_can.jpg"},
    {name: "Wine Glass", image: "images/wine_glass.jpg"}
]

window.addEventListener("load", addListeners);