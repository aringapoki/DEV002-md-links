const process = require('process');

// console.log(process.argv)

if(process.argv[3] === '--options'){
    console.log('acá debería devolver el array de promesas con options')
} else if (process.argv[4] === '--validate'){
    console.log('acá debería devolver el array de promesas con validate')
}


// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });



// const flag = (
//     process.argv.indexOf('--validate') > -1 ? 'Flag is present.' : 'Flag is not present.'
// );

// // Checks for --custom and if it has a value
// const customIndex = process.argv.indexOf('--custom');
// let customValue;

// if (customIndex > -1) {
//     // Retrieve the value after --custom
//     customValue = process.argv[customIndex + 1];
// }

// const custom = (customValue || 'Default');

// console.log('Flag:', `${flag}`);
// console.log('Custom:', `${custom}`);


