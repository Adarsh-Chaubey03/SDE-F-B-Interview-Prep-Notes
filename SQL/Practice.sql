USE fisher_jordan;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees (employee_id, employee_name, department, salary)
VALUES
(1, 'Alice', 'IT', 70000),
(2, 'Bob', 'IT', 80000),
(3, 'Charlie', 'HR', 60000),
(4, 'David', 'HR', 65000),
(5, 'Eve', 'Sales', 90000),
(6, 'Frank', 'Sales', 85000),
(7, 'Grace', 'IT', 75000);

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;

SELECT salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees)
ORDER BY salary DESC
LIMIT 1;

SELECT employee_name, department, salary
FROM employees e
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department = e.department
);


SELECT employee_name, department, salary
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department
);

-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CREATE TABLE customers (
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO customers VALUES
(1, 'Alice', 'alice@gmail.com'),
(2, 'Bob', 'bob@gmail.com'),
(3, 'Charlie', 'alice@gmail.com'),
(4, 'David', 'david@gmail.com'),
(5, 'Eve', 'bob@gmail.com');

SELECT email, COUNT(email)
FROM customers
GROUP BY email
HAVING COUNT(email) > 1;


--  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////