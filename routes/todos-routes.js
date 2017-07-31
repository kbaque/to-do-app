const express = require('express');
const todosRoutes = express.Router();

const todosController = require('../controllers/todos-controller');

todosRoutes.get('/', todosController.index);
todosRoutes.post('/', todosController.create);

todosRoutes.get('/add', (req, res)=>{
  res.render('todos/todos-add', {
    currentPage: 'add',
  });
});

todosRoutes.get('/:id', todosController.show);
todosRoutes.get('/:id/edit', todosController.edit);
todosRoutes.put('/:id', todosController.update);
todosRoutes.delete('/:id', todosController.delete);

todosRoutes.get('/', todosController.index);
todosRoutes.post('/', authHelpers.loginRequired, todosController.create);

todosRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('todos/todos-add', {
    currentPage: 'add',
  });
});

todosRoutes.get('/:id', todosController.show);
todosRoutes.get('/:id/edit', authHelpers.loginRequired, todosController.edit);
todosRoutes.put('/:id', authHelpers.loginRequired, todosController.update);
todosRoutes.delete('/:id', authHelpers.loginRequired, todosController.delete);

module.exports = todosRoutes;
