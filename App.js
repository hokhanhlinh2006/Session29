import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // Hàm lấy danh sách sinh viên
  const getAllStudent = async () => {
    try {
      const response = await axios.get("http://localhost:3002/students");
      console.log("Danh sách sinh viên:", response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  // Gọi hàm khi component được render lần đầu
  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div>
      <h1>Bài 4: Axios API</h1>
      <p>Mở console (F12 → tab Console) để xem dữ liệu sinh viên.</p>
    </div>
  );
}

export default App;
