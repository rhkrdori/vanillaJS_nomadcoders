const images = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
console.dir(bgImage);

bgImage.src = `${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);
