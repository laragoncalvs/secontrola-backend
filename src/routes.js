const express = require('express')
const routes = express.Router();

const ExpensesController = require('./controllers/ExpensesController')
const ExpensesTypesController = require('./controllers/ExpensesTypesController')
const IncomesController = require('./controllers/IncomesController')

routes.get('/expenses', ExpensesController.read);
routes.post('/expenses', ExpensesController.create);
routes.post('/expenses/:id', ExpensesController.update);
routes.delete('/expenses/:id', ExpensesController.delete);

routes.get('/expensestypes', ExpensesTypesController.read);
routes.post('/expensestypes', ExpensesTypesController.create);
routes.post('/expensestypes/:id', ExpensesTypesController.update);
routes.delete('/expensestypes/:id', ExpensesTypesController.delete);

routes.get('/incomes', IncomesController.read);
routes.post('/incomes', IncomesController.create);
routes.delete('/incomes/:id', IncomesController.delete);



module.exports = routes;