 // Make a div

// add a class of wrapper to it

// put it into the body
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);
;
// make an unordered list



// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
div.innerHTML = ul;


// create an image



// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const image = document.createElement('img');
image.src = `https://source.unsplash.com/random/`;
image.width ='250';
image.classList.add('cute');
image.alt = 'cute pup';
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
 <div class="myDiv">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
 </div>
`;

const ulElement = div.querySelector('ul');

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforeend', myHTML);

// add a class to the second paragraph called warning

const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph

myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>`;
    return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed



// select all the buttons!
const buttons = document.querySelectorAll('.delete')
// make out delete function

function deleteCard(event) {
    const buttonClicked = event.currentTarget;
    buttonClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));











