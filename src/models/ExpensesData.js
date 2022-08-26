const mongoose = require('mongoose');

const ExpensesDataSchema = new mongoose.Schema({
    type: String,
    description: String,
    date: Date,
    expense: Number

})

module.exports = mongoose.model(
    'Expenses', ExpensesDataSchema
)