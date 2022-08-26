const Expenses = require('../models/ExpensesData');

module.exports = {

    async read(req, res){
        const expensesList = await Expenses.find();
        return res.json(expensesList);
    },

    async create(req, res){
        const { type, description, date, expense } = req.body;

        if(!type || !expense){
            return res.status(400).json({"error": "fields required"})
        }

        const expenseCreated = await Expenses.create(
            {
                type, description, date, expense
            }
        )

        return res.json(expenseCreated);
    },

    async update (req, res){
        const { id } = req.params;
        const { description, date, expense } = req.body;

        const expenseData = await Expenses.findOne({ _id: id });

        if(description || date || expense){
            expenseData.description = description;
            expenseData.date = date;
            expenseData.expense = expense;

            await expenseData.save();
        }
        return res.json(expenseData);
    },

    async delete (req, res){
        const {id} = req.params;
        const expenseDeleted = await Expenses.findOneAndDelete({ _id: id });
        
        return res.json(expenseDeleted);
    }



}