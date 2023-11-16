// // ---- Esercizio 1 ----


// const safeParseJSON = (json) => {

//     let result = null;

//     try {
//         const test = JSON.parse(json);

//         result = test;

//         console.log('JSON converted successfully.');
//     } 
//     catch {
//         console.warn('Failed to convert JSON.');
//     }

//     return result;
// }

// const jsonString = '[1, 2, 3]';

// const obj = safeParseJSON(jsonString);

// console.log(obj);





// // ---- Esercizio 2 ----


// const logElemnts = (array) => {

//     array.forEach( elem => console.log(elem) );
// };

// const teams = ["Heat", "Spurs", "Lakers", "Raptors"];

// logElemnts(teams);





// // ---- Esercizio 3 ----


// const divide = (dividend, divisor) => {

//     if (divisor === 0) {

//         throw new Error('Impossible to divide by 0');
//     }
//     else {
//         return dividend / divisor;
//     }
// };

// const test = divide(16, 2);

// console.log(test);





// // ---- Esercizio 4 ----


// const processNumbers = (array) => {

//     array.forEach( (elem, i) => {

//         if (typeof elem !== 'number') {

//             throw new Error (`The element at index ${i} is not a number`)
//         }
//     })

//     const squareNumbers = array.map( n => n ** 2);

//     return squareNumbers;
// }

// const numbers = [3, 5, 12, 9, 23, 7];

// const test = processNumbers(numbers);

// console.log(test);





// // ---- Esercizio 5 ----


// const mapWithIndex = (array) => {

//     const newArray = array.map((elem, i) => {

//         return `Element ${i}: ${elem}`;
//     })

//     return newArray;
// }

// const teams = ["Heat", "Spurs", "Lakers", "Raptors"];

// const test = mapWithIndex(teams);

// console.log(test);





// // ---- Esercizio 6 ----


// const removeShortWords = (array, min) => {

//     const newArray = array.filter( string => string.length > min );

//     return newArray;
// }

// const strings = ["hi", "bye", "hola", "hello", "howdie", "morning"];

// const test = removeShortWords(strings, 4);

// console.log(test);

