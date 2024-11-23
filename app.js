const prompt = require('prompt-sync')();
const Customer = require('./models/customer.js');





const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);
