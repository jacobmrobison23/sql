DROP DATABASE IF EXISTS dunder_db;
CREATE DATABASE dunder_db;
/c dunder_db;


-- Create the employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(100),
    salary DECIMAL(10, 2)
);

-- Create the departments table
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100)
);

-- Create the employees_departments junction table
CREATE TABLE employees_departments (
    employee_id INT,
    department_id INT,
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);