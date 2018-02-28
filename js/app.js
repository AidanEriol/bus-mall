function addListeners() {
    document.getElementById("carousel").addEventListener("click", registerPicClick)
}

function registerPicClick(event) {
    if (event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        console.log(event.target.src.substring(index + 1));
    }
}

window.addEventListener("load", addListeners);