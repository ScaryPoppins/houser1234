CREATE TABLE house (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(150),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER
);

-- ALTER TABLE house
--     ADD COLUMN 