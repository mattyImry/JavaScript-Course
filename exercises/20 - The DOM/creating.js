
const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am the new paragraph';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImg = document.createElement('img');
myImg.src = `https://source.unsplash.com/random/300x300`;
myImg.alt = `nice pic`;
console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);


myDiv.appendChild(myParagraph);
myDiv.appendChild(myImg);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool staff';

myDiv.insertAdjacentElement('afterbegin', heading);

////////////////////////////////////////////////////


const uList = document.createElement('ul');

const lList1 = document.createElement('li');
lList1.textContent = 'One';

const lList2 = document.createElement('li');
lList2.textContent = 'Two';

const lList3 = document.createElement('li');
lList3.textContent = 'Three';

const lList4 = document.createElement('li');
lList4.textContent = 'Four';

uList.insertAdjacentElement('beforeend', lList1);
uList.insertAdjacentElement('beforeend', lList2);
uList.insertAdjacentElement('beforeend', lList3);
uList.insertAdjacentElement('beforeend', lList4);

document.body.insertAdjacentElement('afterbegin', uList);
console.log(uList);

