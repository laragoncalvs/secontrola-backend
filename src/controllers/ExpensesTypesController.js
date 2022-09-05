const ExpensesTypes = require('../models/ExpensesTypesData');

module.exports = {

    async read(req, res){
        const expensesList = await ExpensesTypes.find();
        return res.json(expensesList);
    },

    async create(req, res){
        const { expenseType, goal} = req.body;

        if(!expenseType || !goal){
            return res.status(400).json({"error": "fields required"})
        }

        const expenseCreated = await ExpensesTypes.create(
            {
                expenseType, goal
            }
        )

        return res.json(expenseCreated);
    },

    async update (req, res){
        const { id } = req.params;
        const { goal } = req.body;

        const expenseData = await ExpensesTypes.findOne({ _id: id });

        if(goal){
            expenseData.goal = goal;

            await expenseData.save();
        }
        return res.json(expenseData);
    },

    async delete (req, res){
        const {id} = req.params;
        const expenseDeleted = await ExpensesTypes.findOneAndDelete({ _id: id });
        
        return res.json(expenseDeleted);
    }



}