import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Students Found</h3>
        <p>Add a student to get started.</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <h2 className="list-title">Students</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;
