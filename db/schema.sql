DROP TABLE IF EXISTS employees;
/*why is role in blue?*/
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;


CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL
);

/*why is role in blue?*/
CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
/*double check this is correct*/
/*CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES (id) ON DELETE SET NULL*/
);

CREATE TABLE department (
id INT PRIMARY KEY,       
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL
);

INSERT INTO department (name)
VALUES