const express = require("express");

const app = express();
app.use(express.json());
let students = [
    {
        id: 1,
        name: "ali",
        age: 21

    },
      {
        id: 2,
        name: "ahmad",
        age: 30

    },
];
app.get("/student", (req, res) => {
    res.json(students);
});

app.post("/student", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json({
        message: "student add",
        student:student
    });
});
app.put("/student/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student Updated Successfully",
        student: student
    });

}); 
app.delete("/student/:id", (req, res) => {

   const student = students.find(s => s.id === id);

if (!student) {
    return res.status(404).json({
        message: "Student not found"
    });
}

students = students.filter(s => s.id !== id);

res.json({
    message: "Student Deleted Successfully"
});

});
app.listen(3000, () => {
    console.log("json run");
});