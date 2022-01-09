const butts = document.querySelector('.butts');

function handleClick() {
    console.log('clicked again');
}

butts.addEventListener('click', handleClick);

function buyItem(){
    console.log('BUYING!!')
}

//listen to more items

const buyButtons = document.querySelectorAll("button.buy");

buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener("click", buyItem);
  });

buyButtons.forEach(button =>{
    button.addEventListener('click', () => {
        console.log('You clicked');
    })
})
