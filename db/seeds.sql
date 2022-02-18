INSERT INTO role (id, title, salary, department_id)
VALUES
(1234, 'Salesperson', 80000, 1000), 
(1235, 'Lead Engineer', 150000, 2000),  
(1236, 'Software Engineer', 120000, 2000),
(1237, 'Account Manager', 160000, 3000),
(1238, 'Accountant', 125000, 3000),
(1239, 'Legal Team Lead', 250000, 4000),
(1240, 'Lawyer', 190000, 4000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES      
('Mike', 'Chan', 1234, 4321), 
('Ashley','Rodriguez', 1235, 5321),  
('Kevin', 'Tupik', 1236, 6321),
('Kunal', 'Singh', 1237, 7321),
('Malia', 'Brown', 1238, 8321),
('Sarah', 'Lourd', 1239, 9321),
('Tom', 'Allen', 1240, 0421);