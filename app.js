const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port 3000');
               // `Listening on port ${port}`
});

app.get('/', (req, res)=>{
  res.render('index', {
    message: 'Hello world',
    currentPage: 'home',
    documentTittle: 'todos',
  });
});

const todosRoutes = require('./routes/todos-routes');
app.use('/todos', todosRoutes);

app.get('*', (req, res) =>{
  res.status(404).send('not found!');
});


