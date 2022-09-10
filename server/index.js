const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

//middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        )
        res.json(newTodo)
        console.log(req.body);
    } catch (err) {
        console.log(err)
    }
})

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        )
        res.send("Todo was updated!")
    } catch (err) {
        console.log(err);
    }
})

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1", [id]
        )
        res.json("Shit was deleted!");
    } catch(err) {
        console.log(err);
    }
})
//get a todo
app.get("/todos/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", [id]
        ) 
        response.json(todo.rows[0])
        console.log(request.params);
    } catch (err) {
        console.log(err)
    }
})

// get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err)
    }
})

app.listen(5050, () => {
    console.log("Sever is up on 5050 GOD!!")
})

