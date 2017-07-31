const db = require('../db/config');
const Todos = {};

Todos.findAll = () => {
  return db.query('SELECT * FROM todos');
}

Todos.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
`, [id]);
}

Todos.create = (todos) => {
  return db.one(`
    INSERT INTO todos
    (title, category, info, status)
    VALUES ($1, $2, $3, $4)
    RETURNING *
`, [todos.title, todos.category, todos.info, todos.status]);
}

Todos.update = (todos, id) => {
 return db.one (`
  UPDATE todos SET
  title = $1,
  category = $2,
  info = $3,
  status = $4,
  WHERE id = $5
  RETURNING *
 `, [todos.title, todos.category, todos.info, todos.status, id]);
}

Todos.destroy = (id) => {
 return db.one(`
  DELETE FROM todos
  WHERE id = $1
`, [id]);
}

Todos.create = (todos, userid) => {
  return db.one(`
    INSERT INTO movies
    (title, category, info, status, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [todos.title, todos.category, todos.info, todos.status, userid]);
}

module.exports = Todos;
