-- Drops this database if it already exists --
DROP DATABASE IF EXISTS BAmazon_DB;

-- Creates a database called BAmazon_DB --
CREATE DATABASE BAmazon_DB;

USE BAmazon_DB;

CREATE TABLE products (
    -- Creates a numeric column called "id" which will automatically increment its default value as I create new rows. --
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

-- Creating mock rows --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tadem Bicycle", "Outdoor", 269.25, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazon Firestick", "Electronics", 49.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillow Case", "Home and Kitchen", 22.09, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Robe", "Home and Kitchen", 18.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("uHome", "Electronics", 69.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rubix Cube", "Toys and Games", 9.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Toys and Games", 11.91, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammock", "Outdoor", 29.99, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Screw Driver Set", "Tools & Home Improvement", 20.22, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hex Key Wrench Set", "Tools & Home Improvement", 15.20, 95);

-- Creates database graph in MySQL --
SELECT * FROM products