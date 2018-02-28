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

var getRandomItem = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    document.getElementsByClassName("image").innerHTML = "<img src='" + getRandomItem + "'>";

    function getRandomPicture(imagesArray) {
        return imagesArray[Math.floor(Math.random()*imagesArray.length)];
    }

    // function threeRandomImages() {
    
    

    var itemAvailable = document.getElementsByClassName("image")
    // if (var index =0; index <)
for (var index = 0; index < itemAvailable.length; index ++) {
    var thing = getRandomPicture(imagesArray);
    itemAvailable[index].innerHTML = "<img src='"+thing.image+"'>";
    }
// }

window.addEventListener("load", addListeners);