# 👨‍💼 Employee Management System

A modern and responsive Employee Management System developed using **Node.js**, **Express.js**, **MySQL**, **HTML**, **CSS**, and **JavaScript**. The application allows administrators to efficiently manage employee records through complete CRUD (Create, Read, Update, Delete) operations with an attractive dashboard interface.

---

## 🚀 Features

- Add New Employee
- View All Employees
- Update Employee Details
- Delete Employee Records
- Search Employees by Name or Department
- Sort Employees by Name or Salary
- Dashboard Cards (Total Employees & Total Salary)
- Input Validation
- Responsive Modern UI
- REST API Integration
- MySQL Database Connectivity

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Packages Used

- Express
- MySQL2
- MySQL
- Body Parser
- CORS

---

# 📂 Project Structure

```
Employee-Management-System/
│
├── employee.html
├── server.js
├── db.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── screenshots/
    ├── dashboard.png
    ├── add-employee.png
    └── employee-table.png
```

---

# ⚙️ Working Flow

### Step 1 — Dashboard

- User opens the Employee Dashboard.
- The application automatically fetches all employee records from the backend.
- Dashboard displays:
  - Total Employees
  - Total Salary
  - Employee Table

---

### Step 2 — Add Employee

- Fill in:
  - Name
  - Email
  - Department
  - Salary
- Click **Add**.
- Data is validated and stored in the MySQL database.
- Employee list refreshes automatically.

---

### Step 3 — View Employees

- All employee records are displayed in a table.
- Clicking a row loads that employee's details into the form for editing.

---

### Step 4 — Update Employee

- Select an employee from the table.
- Modify the required details.
- Click **Update**.
- Changes are saved to the database and reflected instantly.

---

### Step 5 — Delete Employee

- Select an employee.
- Click **Delete**.
- Confirm the deletion.
- Employee record is removed from the database.

---

### Step 6 — Search & Sort

Users can:

- Search employees by Name or Department.
- Sort employees:
  - Name (A-Z)
  - Name (Z-A)
  - Salary (Low to High)
  - Salary (High to Low)

---

# 🔄 Application Flow

```
Start Application
        │
        ▼
Load Employee Dashboard
        │
        ▼
Fetch Employee Records
        │
        ▼
Display Employee Table
        │
 ┌──────┼─────────────┐
 ▼      ▼             ▼
Add   Update       Delete
 │      │             │
 └──────┼─────────────┘
        ▼
Refresh Employee List
        │
        ▼
Search / Sort Employees
```

---

# 🗄️ Database Schema

## Employees Table

| Column | Type |
|---------|------|
| id | INT (Primary Key, AUTO_INCREMENT) |
| name | VARCHAR(100) |
| email | VARCHAR(100) |
| department | VARCHAR(100) |
| salary | DECIMAL(10,2) |

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Fetch All Employees |
| POST | /employees | Add New Employee |
| PUT | /employees/:id | Update Employee |
| DELETE | /employees/:id | Delete Employee |

---

# 🎨 User Interface Features

- Responsive Dashboard
- Animated Sidebar
- Interactive Cards
- Employee Statistics
- Search Functionality
- Sorting Options
- Smooth Button Animations
- Hover Effects
- Modern Dark Theme
- Professional Layout

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

## Navigate to Project

```bash
cd employee-management-system
```

## Install Dependencies

```bash
npm install
```

## Create Database

```sql
CREATE DATABASE employee_management;
```

Create Employees Table

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(100),
    salary DECIMAL(10,2)
);
```

Update your `db.js` file with your MySQL credentials.

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "employee_management"
```

Start the server:

```bash
node server.js
```

Open the application:

```
http://localhost:3000
after :

http://localhost:3000/employee 
```

---

# 📸 Screenshots

Add project screenshots inside a `screenshots` folder.

Example:

```
screenshots/
├── dashboard.png
├── add-employee.png
└── employee-table.png
```

---

# ✨ Future Enhancements

- Employee Login System
- Admin Authentication
- Profile Picture Upload
- Export Employee Data (PDF/Excel)
- Pagination
- Department Analytics
- Salary Reports
- Email Notifications
- Attendance Management

---

# 🎯 Learning Outcomes

This project demonstrates:

- CRUD Operations
- REST API Development
- MySQL Database Integration
- Client-Server Architecture
- JavaScript Fetch API
- Responsive Web Design
- Form Validation
- Search & Sorting Algorithms
- Full Stack Web Development

---

# 👩‍💻 Author

**Trisha Turkar**

Full Stack Developer | Computer Science Student

---

# 📄 License

This project is developed for educational and learning purposes. Feel free to use, modify, and extend it for personal, academic, or portfolio projects.

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!
