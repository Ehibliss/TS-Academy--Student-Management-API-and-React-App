import { useEffect, useState } from "react";
import app from "./api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  async function fetchStudents() {
    try {
      const response = await app.get("/getallstudents");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  // Get Student by ID
  async function handleGetStudentById(id) {
    try {
      const response = await app.get(`/getstudentbyId/${id}`);
      console.log(response.data);

      // Optional: load the student into the form for editing
      setEditingStudent(response.data);
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  }

  // Add or Update Student
  async function handleSubmit(formData) {
    try {
      if (editingStudent) {
        await app.put(`/updatestudent/:id/${editingStudent.id}`, formData);
        setEditingStudent(null);
      } else {
        await API.post("/createstudents", formData);
      }

      fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  }

  // Edit Student
  function handleEdit(student) {
    setEditingStudent(student);
  }

  // Delete Student
  async function handleDelete(id) {
    try {
      await app.delete(`/deletestudentbyId/:id/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  return (
    <div className="app">
      <h1>Student Management System</h1>

      <StudentForm onSubmit={handleSubmit} student={editingStudent} />

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
