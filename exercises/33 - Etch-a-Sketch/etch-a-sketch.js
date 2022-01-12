//SELECT ELEMENTS IN THE PAGE

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

//SETUP CANVAS FOR DRAWINGS

// const width = canvas.width;
// const height = canvas.height;
// deconstucting form an object same as above variables

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// create a random x and y starting point on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function

// write a handler for the keys

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        console.log(e.key);
        console.log('handlingkey');
    }
}

//clear / shake function

//listen for arrow keys

window.addEventListener('keydown', handleKey);


