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

function handleBuyButtonClick(event) {
    console.log('you are buing it!');
    console.log(event);
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
})

const photoEl = document.querySelector('.image');

photoEl.addEventListener('mousemove', function(e) {
    console.count(e.currentTarget);
})