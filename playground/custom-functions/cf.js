
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {

    // by setting taxRate = 0.13 if do not runj argument taxRate when colling the function the value 0.13 is the default value
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

// const myTotal = calculateBill(100, 0.13);
const bill4 = calculateBill(100, undefined, 0.2)
// by using undefined in the argument when calling the function will refer back to parameter set to default. 


function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Mat');
// console.log(greeting);


// const myTotal3 = calculateBill(10 + 20 + 20, 0.15)
// console.log(myTotal3);


function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name) {
    return `Hey ${name.toUpperCase()}`;
}


// Passing a function in a function as argument (doctorize())
doc = yell(doctorize('Mat'))
