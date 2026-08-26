# SQL — Part 1: MySQL Basics


---

## 1. Database Commands

### CREATE DATABASE
**Use:** Creates a new database.

```sql
CREATE DATABASE company_db;
```

### USE
**Use:** Selects the database for subsequent operations.

```sql
USE company_db;
```

### DROP DATABASE
**Use:** Permanently deletes a database and all its objects.

```sql
DROP DATABASE company_db;
```

---

## 2. Data Types

| Data Type | Use | Example |
|---|---|---|
| `INT` | Integer values | `age INT` |
| `BIGINT` | Large integers | `id BIGINT` |
| `DECIMAL(p,s)` | Exact decimal values | `salary DECIMAL(10,2)` |
| `FLOAT` | Approximate decimal values | `rating FLOAT` |
| `CHAR(n)` | Fixed-length string | `code CHAR(5)` |
| `VARCHAR(n)` | Variable-length string | `name VARCHAR(100)` |
| `TEXT` | Large text | `description TEXT` |
| `DATE` | Date | `dob DATE` |
| `DATETIME` | Date and time | `created_at DATETIME` |
| `TIMESTAMP` | Timestamp values | `updated_at TIMESTAMP` |
| `BOOLEAN` | Boolean value (`0`/`1`) | `active BOOLEAN` |

---

## 3. CREATE TABLE

**Use:** Creates a table with defined columns, data types, and constraints.

```sql
CREATE TABLE employees (
    emp_id INT,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    hire_date DATE
);
```

---

## 4. PRIMARY KEY

**Use:** Uniquely identifies each row and cannot contain `NULL`.

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

### Composite Primary Key
**Use:** Uses multiple columns together as the unique identifier.

```sql
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

---

## 5. FOREIGN KEY

**Use:** Maintains a relationship between two tables.

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

---

## 6. NOT NULL

**Use:** Prevents a column from storing `NULL`.

```sql
CREATE TABLE employees (
    emp_id INT,
    name VARCHAR(100) NOT NULL
);
```

---

## 7. UNIQUE

**Use:** Prevents duplicate values in a column or column combination.

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    email VARCHAR(150) UNIQUE
);
```

---

## 8. DEFAULT

**Use:** Automatically provides a value when no value is supplied.

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'ACTIVE'
);
```

---

## 9. CHECK

**Use:** Restricts values according to a condition.

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    salary DECIMAL(10,2) CHECK (salary >= 0)
);
```

---

## 10. AUTO_INCREMENT

**Use:** Automatically generates the next integer value for a column.

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);
```

---

# ALTER TABLE

## 11. ADD COLUMN

**Use:** Adds a new column to an existing table.

```sql
ALTER TABLE employees
ADD COLUMN email VARCHAR(150);
```

---

## 12. DROP COLUMN

**Use:** Removes a column from an existing table.

```sql
ALTER TABLE employees
DROP COLUMN email;
```

---

## 13. MODIFY COLUMN

**Use:** Changes a column's data type or definition.

```sql
ALTER TABLE employees
MODIFY COLUMN name VARCHAR(200);
```

---

## 14. CHANGE COLUMN

**Use:** Renames a column and can also modify its definition.

```sql
ALTER TABLE employees
CHANGE COLUMN name full_name VARCHAR(200);
```

---

## 15. RENAME TABLE

**Use:** Changes the name of an existing table.

```sql
RENAME TABLE employees TO staff;
```

---

## 16. Add Constraint with ALTER

### Add Primary Key
**Use:** Adds a primary key to an existing table.

```sql
ALTER TABLE employees
ADD PRIMARY KEY (emp_id);
```

### Add Foreign Key
**Use:** Adds a foreign-key relationship to an existing table.

```sql
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id)
REFERENCES departments(department_id);
```

### Add UNIQUE
**Use:** Adds a uniqueness constraint to an existing column.

```sql
ALTER TABLE employees
ADD CONSTRAINT uq_email UNIQUE (email);
```

---

# Data Modification

## 17. INSERT

**Use:** Adds new rows to a table.

```sql
INSERT INTO employees (name, salary)
VALUES ('Adarsh', 60000);
```

### Multiple Rows

```sql
INSERT INTO employees (name, salary)
VALUES
    ('Aman', 50000),
    ('Rahul', 55000);
```

---

## 18. UPDATE

**Use:** Modifies existing rows.

```sql
UPDATE employees
SET salary = 65000
WHERE emp_id = 1;
```

> Always verify the `WHERE` condition before updating.

---

## 19. DELETE

**Use:** Removes selected rows from a table.

```sql
DELETE FROM employees
WHERE emp_id = 1;
```

### Delete All Rows

```sql
DELETE FROM employees;
```

---

## 20. TRUNCATE

**Use:** Removes all rows from a table while keeping the table structure.

```sql
TRUNCATE TABLE employees;
```

### DELETE vs TRUNCATE

```text
DELETE    → removes rows; can use WHERE
TRUNCATE  → removes all rows; no WHERE
```

---

## 21. DROP TABLE

**Use:** Permanently removes the table and its structure.

```sql
DROP TABLE employees;
```

### TRUNCATE vs DROP

```text
TRUNCATE → removes data, keeps table
DROP     → removes data + table
```

---

# Transactions — Basic

## 22. START TRANSACTION

**Use:** Starts an explicit transaction.

```sql
START TRANSACTION;
```

---

## 23. COMMIT

**Use:** Permanently saves the changes made in the transaction.

```sql
COMMIT;
```

---

## 24. ROLLBACK

**Use:** Reverts uncommitted changes.

```sql
ROLLBACK;
```

---

## 25. SAVEPOINT

**Use:** Creates a point inside a transaction to which you can roll back.

```sql
SAVEPOINT sp1;
```

```sql
ROLLBACK TO sp1;
```

---

# Quick Revision

| Command / Concept | One-line Use |
|---|---|
| `CREATE DATABASE` | Create database |
| `USE` | Select database |
| `DROP DATABASE` | Delete database |
| `CREATE TABLE` | Create table |
| `PRIMARY KEY` | Uniquely identify rows |
| `FOREIGN KEY` | Link tables |
| `NOT NULL` | Prevent `NULL` |
| `UNIQUE` | Prevent duplicates |
| `DEFAULT` | Set automatic default value |
| `CHECK` | Enforce a condition |
| `AUTO_INCREMENT` | Generate sequential IDs |
| `ALTER TABLE` | Modify table structure |
| `ADD COLUMN` | Add column |
| `DROP COLUMN` | Remove column |
| `MODIFY COLUMN` | Change column definition |
| `CHANGE COLUMN` | Rename/change column |
| `RENAME TABLE` | Rename table |
| `INSERT` | Add rows |
| `UPDATE` | Modify rows |
| `DELETE` | Remove rows |
| `TRUNCATE` | Remove all rows, keep structure |
| `DROP TABLE` | Delete table |
| `START TRANSACTION` | Begin transaction |
| `COMMIT` | Save transaction |
| `ROLLBACK` | Undo uncommitted changes |
| `SAVEPOINT` | Create rollback point |

---

