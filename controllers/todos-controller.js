const Todos = require('../models/todos');
const todosController = {};

todosController.index = (req, res)=>{
  Todos.findAll().then(todos => {
    res.render('todos/todos-index', {
      currentPage: 'index',
      message: 'ok',
      data: todos,
    });
  }).catch(err =>{
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.show = (req, res)=> {
  Todos.findById(req.params.id)
   .then(todos => {
     res.render('todos/todos-single', {
      currentPage: 'show',
      message: 'ok',
      data: todos,
     });
   }).catch(err => {
    console.log(err);
    res.status(500).json(err);
   });
};

todosController.create = (req, res) => {
  Todos.create({
    title: req.body.title,
    category: req.body.category,
    info: req.body.info,
  }).then(() => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.update = (req, res) =>{
  Todos.update({
    title: req.body.title,
    category: req.body.category,
    info: req.body.info,
  }, req.params.id).then(movie => {
    res.redirect(`/todos/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.edit = (req, res) => {
  Todos.findById(req.params.id)
  .then(todos => {
    res.render('todos/todos-single-edit', {
      currentPage: 'edit',
      data: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

todosController.delete = (req, res) => {
  Todos.destroy(req.params.id)
  .then(() => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = todosController;
