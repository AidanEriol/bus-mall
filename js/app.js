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
    "images/bag.jpg",
    "images/banana.jpg",
    "images/boots.jpg",
    "images/chair.jpg",
    "images/cthulhu.jpg",
    "images/dragon.jpg",
    "images/pen.jpg",
    "images/scissors.jpg",
    "images/shark.jpg",
    "images/sweep.jpg",
    "images/unicorn.jpg",
    "images/usb.jpg",
    "images/water_can.jpg",
    "images/wine_glass.jpg"
];

window.onload = showPicture;

function showPicture() {
    // for (index = 0; index < imagesArray.length; index++) {
    var randomImage = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("image1").innerHTML = "<img src='" + imagesArray[randomImage] + "'>";
}

window.addEventListener("load", addListeners);
