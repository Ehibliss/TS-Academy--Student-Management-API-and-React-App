import "./StudentCard.css";

function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-details">
        <h3>{student.name}</h3>

        <p>
          <strong>Age:</strong> {student.age}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>
      </div>

      <div className="student-actions">
        <button className="edit-btn" onClick={() => onEdit(student)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
