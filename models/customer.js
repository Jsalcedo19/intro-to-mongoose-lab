// importing mongoose into our customer.js
const mongoose = require('mongoose');

//customer schema defined
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        require: true
    },
});

//creates model from the schema.
const Customer = mongoose.model('Customer',customerSchema);

//exports the model so that it can be used throughout the app.
model.exports = Customer;