const mongoose = require('mongoose');

const ExpensesTypesDataSchema = new mongoose.Schema({
    expenseType: String,
    goal: Number
})

module.exports = mongoose.model(
    'ExpensesTypes', ExpensesTypesDataSchema
)