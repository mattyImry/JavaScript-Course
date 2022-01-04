const par = document.querySelector('p');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
heading.textContent = 'Ostia';
console.log(heading.textContent);
console.log(heading.innerText);


const steakList = document.querySelector('.steak');
console.log(steakList.textContent);

//steakList.textContent = `${steakList.textContent} &#129385;`

steakList.insertAdjacentText('beforeend', 'ostia')

const pic = document.querySelector(".nice");


// pic.classList.add('open');
// pic.classList.remove('open');

// pic.classList.add('round');
//pic.classList.toggle('round');

function toggleRound() {
    pic.classList.toggle('round')
}

pic.addEventListener('click', toggleRound);

