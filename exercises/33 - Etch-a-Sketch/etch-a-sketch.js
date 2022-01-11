//SELECT ELEMENTS IN THE PAGE

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

//SETUP CANVAS FOR DRAWINGS

// const width = canvas.width;
// const height = canvas.height;
// deconstuycting form an object same as above variables
const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //start drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();




