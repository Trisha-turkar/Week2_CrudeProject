const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());



// TEST API

app.get("/", (req, res) => {
    res.send("Server Running ✅");
});



// GET ALL EMPLOYEES

app.get("/employees", (req, res) => {

    db.query("SELECT * FROM employees", (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Database error" });
        }

        res.json(result);
    });
});



// GET SINGLE EMPLOYEE

app.get("/employees/:id", (req, res) => {

    db.query(
        "SELECT * FROM employees WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).json({ error: "Fetch error" });
            }

            res.json(result[0]);
        }
    );
});



// ADD EMPLOYEE

app.post("/employees", (req, res) => {

    const { name, email, department, salary } = req.body;

    // validation
    if (!name || !email || !department || !salary) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO employees (name, email, department, salary)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, department, salary], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Insert failed" });
        }

        res.json({
            message: "Employee added successfully ✅",
            id: result.insertId
        });
    });
});



// UPDATE EMPLOYEE

app.put("/employees/:id", (req, res) => {

    const { name, email, department, salary } = req.body;
    const { id } = req.params;

    const sql = `
        UPDATE employees 
        SET name=?, email=?, department=?, salary=? 
        WHERE id=?
    `;

    db.query(sql, [name, email, department, salary, id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Update failed" });
        }

        res.json({
            message: "Employee updated successfully ✅"
        });
    });
});



// DELETE EMPLOYEE

app.delete("/employees/:id", (req, res) => {

    db.query(
        "DELETE FROM employees WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Delete failed" });
            }

            res.json({
                message: "Employee deleted successfully ✅"
            });
        }
    );
});



// SEARCH EMPLOYEE (BONUS)

app.get("/employees/search/:key", (req, res) => {

    const key = `%${req.params.key}%`;

    db.query(
        "SELECT * FROM employees WHERE name LIKE ? OR department LIKE ?",
        [key, key],
        (err, result) => {

            if (err) {
                return res.status(500).json({ error: "Search failed" });
            }

            res.json(result);
        }
    );
});



// TOTAL EMPLOYEES COUNT (DASHBOARD)

app.get("/employees/count", (req, res) => {

    db.query(
        "SELECT COUNT(*) AS total FROM employees",
        (err, result) => {

            if (err) {
                return res.status(500).json({ error: "Count error" });
            }

            res.json(result[0]);
        }
    );
});


// SERVER START
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});