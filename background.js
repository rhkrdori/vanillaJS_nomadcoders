const images = [
    "/vanillaJS_nomadcoders/0.jpg",
    "/vanillaJS_nomadcoders/1.jpg",
    "/vanillaJS_nomadcoders/2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
console.dir(bgImage);

bgImage.src = `${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);
