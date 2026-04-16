const ImageNature = [

    "https://i.pinimg.com/736x/1d/a9/4d/1da94d0f39b99a2d50aaa87ad18d2eb0.jpg",
    "https://i.pinimg.com/736x/06/0c/80/060c8066750c3b7e1af89efb8c1a381e.jpg",
    "https://i.pinimg.com/1200x/03/99/86/039986002f59572d583dd75437613eab.jpg",
    "https://i.pinimg.com/736x/9e/24/e3/9e24e32e6607a844b29dc49113db3fac.jpg",
    "https://i.pinimg.com/736x/a5/0d/19/a50d199c964e5587ed69760a47416da6.jpg",
    "https://i.pinimg.com/1200x/e5/6b/4d/e56b4dc17ddfc16e98d4316115bbe48a.jpg",
    "https://i.pinimg.com/1200x/87/4e/c0/874ec03ee1c125aefb0759be80d3c4ab.jpg"
]

let photos = document.getElementById("img")

let Next = document.getElementById("NextBtn")

let Previous = document.getElementById("PreBtn")

let index = 0

photos.src = ImageNature[index];


function NextPhoto() {
    index++;
    if (index >= ImageNature.length) {
        index = 0
    }
    photos.src = ImageNature[index];
}


function PrePhoto() {
    index--;
    if (index < 0) {
        index = ImageNature.length - 1
    }
    photos.src = ImageNature[index];
}

setInterval(() => {
    NextPhoto()
}, 3000);
