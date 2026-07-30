const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const students = [];

app.post("/createstudents", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }
  const newStudent = {
    id: students.length + 100000,
    name,
    age,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get("/getallstudents", (req, res) => {
  res.json(students);
});

app.get("/getstudentbyId/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  app.put("/updatestudent/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find((s) => s.id === id);

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    const { name, age, course } = req.body;

    if (name) student.name = name;
    if (age) student.age = age;
    if (course) student.course = course;

    res.status(200).json({
      message: "Student details has updated successfully",
    });
  });
  res.status(200).json(student);
});

app.delete("/deletestudentbyId/:id", (req, res) => {
  const studeId = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === studeId);
  if (studentIndex === -1) {
    return res.status(404).json({
      error: "Student not found",
    });
    students.splice(studentIndex, 1);
    res.json({
      message: "Student deleted successfully",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
