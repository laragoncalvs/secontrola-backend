const mongoose = require('mongoose');

const IncomesDataSchema = new mongoose.Schema({
    description: String,
    income: Number,
    date: Date
})

module.exports = mongoose.model(
    'Incomes', IncomesDataSchema
)