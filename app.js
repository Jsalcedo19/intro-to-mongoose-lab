//import modules
const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const Customer = require('./models/customer.js');
const dotenv = require('dotenv');
dotenv.config();

//used chatGPT for this block of code.
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the application if connection fails
    }
};
connect();


console.log('Welcome to the CRM');

console.log('What would you like to do?');






//const username = prompt('What is your name? ');

//console.log(`Your name is ${username}`);






/*
Welcome to the CRM

What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. quit

Number of action to run: 
# user inputs 3



*/