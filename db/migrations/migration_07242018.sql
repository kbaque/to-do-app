\connect todos_dev

CREATE TABLE IF NOT EXISTS todos (
 id SERIAL PRIMARY KEY,
 title VARCHAR(225),
 category VARCHAR(225),
 info VARCHAR(225),
 status VARCHAR(225)
);


-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) UNIQUE NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password_digest TEXT NOT NULL,
--   firstname VARCHAR(255),
--   lastname VARCHAR(255)
-- );

-- ALTER TABLE movies
-- ADD COLUMN user_id INTEGER REFERENCES users(id);
