const images = [
  "january.jpg",
  "february.jpg",
  "march.jpg",
  "april.jpg",
  "may.jpg",
  "june.jpg",
  "july.jpg",
  "august.jpg",
  "september.jpg",
  "october.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "calendar";

// document.body.style.backgroundImage = `url(img/${chosenImage})`;

document.body.append(bgImage);
