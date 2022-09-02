const mongoose = require('mongoose');

const ExpensesTypesDataSchema = new mongoose.Schema({
    type: String,
    goal: Number
})

module.exports = mongoose.model(
    'ExpensesTypes', ExpensesTypesDataSchema
)