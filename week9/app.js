const express = require('express');
const app = express();

app.use(express.json()); // To handle JSON data

// Sample in-memory database
let students = [
    { id: 1, name: "Vaishnavi", course: "CSE" },
    { id: 2, name: "Rahul", course: "ECE" }
];

app.get('/students', (req, res) => {
    res.json(students);
});


app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.json({ message: "Student added", student: newStudent });
});


app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        student.name = req.body.name || student.name;
        student.course = req.body.course || student.course;
        res.json({ message: "Student updated", student });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});


app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted" });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});