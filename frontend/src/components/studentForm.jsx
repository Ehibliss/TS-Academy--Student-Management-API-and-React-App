import { useEffect, useState } from "react";
import "./StudentForm.css";

function StudentForm({ onSubmit, student }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        age: student.age,
        course: student.course,
      });
    }
  }, [student]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      name: "",
      age: "",
      course: "",
    });
  }

  return (
    <div className="student-form-container">
      <h2>{student ? "Edit Student" : "Add Student"}</h2>

      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {student ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
