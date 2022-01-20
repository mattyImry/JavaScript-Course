const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallBack(payLoad) {
    if (payLoad[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        ob.unobserve(terms.lastElementChild);

    // add this code to reset when off sacroll
    // } else {
    //     button.disabled = true;
     }
}

const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);