//SELECT ELEMENTS IN THE PAGE

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
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
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function

function draw({ key }) {
    console.log(key);

    // increment hue
    hue = hue + 10;
    ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`;
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    //move our x and y value dependingon the key pressed
    
    // 

    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        default:
        break;
    }

    ctx.lineTo(x,y);
    ctx.stroke();
}
// write a handler for the keys

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

//clear / shake function

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, { once :true });
}

//listen for arrow keys

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);

