const mongoose = require('mongoose');

const IncomesDataSchema = new mongoose.Schema({
    name: String,
    income: Number,
    incomeDate: Date
})

module.exports = mongoose.model(
    'Incomes', IncomesDataSchema
)