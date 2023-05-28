const images=[
    "bg_img (1).jpg",
    "bg_img (2).jpg",
    "bg_img (3).jpg",
    "bg_img (4).jpg",
    "bg_img (5).jpg",
    "bg_img (6).jpg",
    "bg_img (7).jpg"
]
const chosenImage = images[Math.floor(Math.random()*(images.length))];

// JS에서 HTML으로 요소 추가하는법 
const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);