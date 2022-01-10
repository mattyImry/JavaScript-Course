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