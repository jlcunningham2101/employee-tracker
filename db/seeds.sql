CREATE TABLE department (
id INT PRIMARY KEY,       
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL
);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES      
('Mike', 'Chan', 1234, 4321), 
('Ashley','Rodriguez', 1235, 5321),  
('Kevin', 'Tupik', 1236, 6321),
('Kunal', 'Singh', 1237, 7321),
('Malia', 'Brown', 1238, 8321),
('Sarah', 'Lourd', 1239, 9321),
('Tom', 'Allen', 1240, 0421);


