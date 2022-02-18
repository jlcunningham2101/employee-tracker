INSERT INTO 
employees (id, first_name, last_name, role_id, manager_id)
VALUES      
(1234,'Mike', 'Chan', 1234, 4321), 
(1235, 'Ashley','Rodriguez', 1235, 5321),  
(1236, 'Kevin', 'Tupik', 1236, 6321),
(1237, 'Kunal', 'Singh', 1237, 7321),
(1238, 'Malia', 'Brown', 1238, 8321),
(1239, 'Sarah', 'Lourd', 1239, 9321),
(1240, 'Tom', 'Allen', 1240, 0421);

INSERT INTO role 
(id, title, salary, department_id)
VALUES
(1234, 'Salesperson', 80000, 1000), 
(1235, 'Lead Engineer', 150000, 2000),  
(1236, 'Software Engineer', 120000, 2000),
(1237, 'Account Manager', 160000, 3000),
(1238, 'Accountant', 125000, 3000),
(1239, 'Legal Team Lead', 250000, 4000),
(1240, 'Lawyer', 190000, 4000);

INSERT INTO department 
(id, first_name, last_name)
VALUES
(1000, 'Mike', 'Chan',), 
(2000, 'Ashley','Rodriguez'),  
(2000, 'Kevin', 'Tupik'),
(3000, 'Kunal', 'Singh'),
(3000, 'Malia', 'Brown'),
(4000, 'Sarah', 'Lourd'),
(4000, 'Tom', 'Allen');

INSERT INTO department(name)
VALUES
('Sales'), 
('Engineering'),
('Finance'),
('Legal');