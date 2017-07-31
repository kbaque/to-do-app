\connect todos_dev

CREATE TABLE IF NOT EXISTS todos (
 id SERIAL PRIMARY KEY,
 title VARCHAR(225),
 category VARCHAR(225),
 info VARCHAR(225),
 status VARCHAR(225)
);


