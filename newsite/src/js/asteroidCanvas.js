import asteroid1 from "../../assets/asteroidGraphics/asteroid1.svg";

const canvas = document.getElementById("asteroidCanvas");
canvas.width = 2200;
canvas.height = 2000;
canvas.style.width = "1100px";
canvas.style.height = "1000px";
const ctx = canvas.getContext("2d");
ctx.scale(2, 2);

var x = 0,
  y = 0,
  dx = 3,
  dy = 3;

export default function asteroidCanvas() {
  setInterval(() => {
    draw();
  }, 20);
}

function draw() {
  clearCanvas();
  let image = new Image();
  image.src = asteroid1;
  image.onload = function() {
    ctx.drawImage(image, x, y, image.width * 0.7, image.height * 0.7);
  };
  x += dx;
  y += dy;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
