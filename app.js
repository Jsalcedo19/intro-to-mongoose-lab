//import modules
const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const Customer = require('./models/customer.js');
const dotenv = require('dotenv');
dotenv.config();

//used chatGPT for the try and catch statements
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the application if connection fails
    }
};
connect();


// Main application loop 
//code modified by chat GPT
const main = async () => {
    console.log("Welcome to the CRM");
    console.log('What would you like to do?');
    let shouldRun = true;
  
    while (shouldRun) {
      console.log("\nWhat would you like to do?");
      console.log("1. Create a customer");
      console.log("2. View all customers");
      console.log("3. Update a customer");
      console.log("4. Delete a customer");
      console.log("5. Quit");
  
      const choice = prompt('Number of action to run: ');
  
      if (choice === '1') {
        await createCustomer();
      } else if (choice === '2') {
        await viewCustomers();
      } else if (choice === '3') {
        await updateCustomer();
      } else if (choice === '4') {
        await deleteCustomer();
      } else if (choice === '5') {
        console.log('Goodbye!');
        shouldRun = false;
      } else {
        console.log('Invalid choice, please choose a number between 1 and 5.');
      }
    }
  };

//create new customer
const createCustomer = async () => {
    const name = prompt('Enter customer name: ');
    const age = parseInt(prompt('Enter customer age: '), 10);

    const customerData = {
        name: name,
        age: age,
    };
    const customer = await Customer.create(customerData);
    console.log("New Customer:", customer);
};

//View all customers
const viewCustomers = async () => {
    const allCustomers = await Customer.find({});
    allCustomers.forEach((customer, index) => {
        console.log(`${index + 1}. ID: ${customer._id}, Name: ${customer.name}, Age: ${customer.age}`);
    });
};

// updates customer  
const updateCustomer = async () => {
    const id = prompt('Enter the ID of the customer to update: ');
    const newName = prompt("Enter Customer's new name (leave blank to keep unchanged): ");
    const newAgeInput = prompt("Enter Customer's new age (leave blank to keep unchanged): ");
    const newAge = newAgeInput ? parseInt(newAgeInput, 10) : null;

    const updateData = {};
    if (newName) updateData.name = newName;
    if (newAge) updateData.age = newAge;

    const updatedCustomer = await Customer.findByIdAndUpdate(id, updateData, { new: true });

    if (updatedCustomer) {
        console.log("Customer has been updated", updatedCustomer);
    } else { 
        console.log('Customer not found.');
    }
};

// Delete a customer
const deleteCustomer = async () => {
    const id = prompt('Enter the ID of the customer to delete: ');
  
    const result = await Customer.findByIdAndDelete(id);
    if (result) {
      console.log('Customer deleted successfully.');
    } else {
      console.log('Customer not found.');
    }
};

main();










