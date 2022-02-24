INSERT INTO department 
(name)
VALUES
('Mike Chan'), 
('Ashley Rodriguez'),  
('Kevin Tupik'),
('Kunal Singh'),
('Malia Brown'),
('Sarah Lourd'),
('Tom Allen');

INSERT INTO role 
(title, salary, department_id)
VALUES
('Salesperson', 80000, 1), 
('Lead Engineer', 150000, 2),  
('Software Engineer', 120000, 3),
('Account Manager', 160000, 4),
('Accountant', 125000, 5),
('Legal Team Lead', 250000, 6),
('Lawyer', 190000, 7);

INSERT INTO 
employees (first_name, last_name, role_id, manager_id)
VALUES      
('Mike', 'Chan', 1, NULL), 
('Ashley','Rodriguez', 2, NULL),  
('Kevin', 'Tupik', 2, 2),
('Kunal', 'Singh', 3, NULL),
('Malia', 'Brown', 3, 1),
('Sarah', 'Lourd', 4, NULL),
('Tom', 'Allen', 4, 3);

