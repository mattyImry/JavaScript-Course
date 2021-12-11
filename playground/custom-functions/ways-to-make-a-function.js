// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// anonimous function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

//function expression

// const doctor = function(firstName) {
//     return `Dr. ${firstName}`;
// }

/* eslint-disable */

// const inchToCM = inches => inches * 2.54;


// FROM NORMAL FUNTION TO ARROW
// function add(a , b = 3) {
//     const total = a + b;
//     return total;

// }

// const add = (a, b =3) => a + b;

//NORMAL FUNCTION WITH OBJECT
// function makeABaby ( firstName, LastName) {
//     const baby = {
//         name : `${firstName} ${LastName}`,
//         age: 0
//     }

//     return baby;
// }

// VALID ARROW FUNCTION JUST REMOVE  `FUNCTION` and create variable
// const makeABaby = (firstName, LastName) => {
//     const baby = {
//         name : `${firstName} ${LastName}`,
//         age: 0
//     }

//     return baby;
// }

// // VALID ARROW FUNCTION REMOVE return and baby const
// const makeABaby = (firstName, LastName) => {
//     return {
//         name : `${firstName} ${LastName}`,
//         age: 0
//     }

// }


// //CREATED A ONE LINER WITH ARROW FUNCTION ( ) NEEDED TO CONTAIN THE {} FOR READABILITY MAYBE BETTER THE NORMAL FUNCTION IN THIS CASE
// const makeABaby = (firstName, LastName) => ({name : `${firstName} ${LastName}`,age: 0});

// METHODS a function stored as a property object

// Methods!!!
const wes = {
    name: 'Westopher Bos',
    // Method!
    sayHi: function() {
      console.log(`Hey ${this.name}`);
      return 'Hey Wes';
    },
    // Short hand Method
    yellHi() {
      console.log('HEY WESSSSS');
    },
    // Arrow function
    wisperHi: () => {
      console.log('hii wesss im a mouse');
    }
  }

  // Callback Functions
// Click Callback
const button1 = document.querySelector('.clickMe');
const button2 = document.querySelector('.clickMe2');


function handle() {
    console.log('nice');

}
button1.addEventListener('click', handle);

button2.addEventListener('click', function(){
    console.log('Puta')
})

// Timer Callback with arrow function
setTimeout(() => {
    console.log('DONE! Time to eat!');
  }, 1000);

  // time call back normal function
setTimeout(function(){
    console.log('Done')
},1000);