const mongoose = require('mongoose');

const ExpensesTypesDataSchema = new mongoose.Schema({
    expensetype: String,
    goal: Number
})

module.exports = mongoose.model(
    'ExpensesTypes', ExpensesTypesDataSchema
)