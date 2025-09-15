import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3002/students");
      setStudents(response.data);
      console.log("Danh sách sinh viên:", response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.student_name} - {student.email} -{" "}
            {student.status ? "Đang học" : "Nghỉ học"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
