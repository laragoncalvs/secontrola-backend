const Incomes = require('../models/IncomesData');

module.exports = {

    async read(req, res){
        const incomesList = await Incomes.find();
        return res.json(incomesList);
    },

    async create(req, res){
        const { description,  income , date } = req.body;

        if(!description || !income){
            return res.status(400).json({"error": "fields required"})
        }

        const incomeCreated = await Incomes.create(
            {
                description, income, date
            }
        )

        return res.json(incomeCreated);
    },


    async delete (req, res){
        const {id} = req.params;
        const incomeDeleted = await Incomes.findOneAndDelete({ _id: id });
        
        return res.json(incomeDeleted);
    }



}