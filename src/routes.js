const express = require('express')
const routes = express.Router();

const ExpensesController = require('./controllers/ExpensesController')

routes.get('/expenses', ExpensesController.read);
routes.post('/expenses', ExpensesController.create);
routes.post('/expenses/:id', ExpensesController.update);
routes.delete('/expenses/:id', ExpensesController.delete);


module.exports = routes;