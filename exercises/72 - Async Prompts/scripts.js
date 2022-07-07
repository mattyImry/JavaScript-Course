
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);

    //remove the popup entierly
    popup.remove();
    // to remove any memory leak issue
    popup = null;
}

function ask(option) {
    return new Promise(async function(resolve) {
        // 1- we need to create a popup with all the fields in it
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin',
            `<fieldset>
                <label>${option.title}</label>   
                <input type="text" name="input"/>
                <button type="submit">Submit</button>
            </fieldset>
        `
        );
        
        //2- check if they want  acancel btn
        if (option.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button'
            skipButton.textContent = 'Cancel';
            popup.firstElementChild.appendChild(skipButton)
            //TODO listen for a click on that cancel button
            skipButton.addEventListener('click',  function() {
                resolve(null);
                destroyPopup(popup);

            }, {once: true}
            );
        }
        //3-listen for the submit event on the inputs

        popup.addEventListener('submit',
            function(e) {
                e.preventDefault();
                resolve(e.target.input.value);
                // remove it from the DOM entirely
                destroyPopup(popup);
        },
        {once: true}
        );

        //4- when someone does submit it, resove the data that was in the input box

        //5- insert popup into dom
        document.body.appendChild(popup);
        //6- the popup doesn not fade in due to the fact that the claases 'popup' and 'open' are added at the 
        //same time. by adding a timeout before the open class will do the trick
        
        await wait(50);
        popup.classList.add('open');
        
    });

}
//select all btn that have a question
async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset;

    const answer = await ask({
        title: button.dataset.question,
        cancel,
    });
    console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
    {title: 'What is your name?'},
    {title: 'What is your age?', cancel: true},
    {title: 'What is your dog name?'}
];

async function asyncMap(array, callback) {
    // make array to store results
    const results = [];
    // loop over our array
    for (const item of array) {
        const result = await callback(item);
        results.push(result);
    }
    // when we are done the loop return it
    return results;
}

async function go() {
    const answer = await asyncMap(questions, ask);
    console.log(answer);
}
go();
// async function askMany() {
//     for (const question of question ) {
//         const answer = await ask(question);
//         console.log(answer);
//     }
// }

// askMany();