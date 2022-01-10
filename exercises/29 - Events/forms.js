const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    const shouldChangePage = confirm('Are you sure');
    
    if(!shouldChangePage) {
        event.preventDefault();
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('Sorry not welcomed');
        event.preventDefault();
    }
});


const photo =  document.querySelector('.image');

function handle(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        console.log('you mug');
    }
}
photo.addEventListener('click', handle);
photo.addEventListener('keyup', handle);