import { useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const addCourse = () => {
    if (!title || !price) return;
    setCourses([...courses, { title, price, tag }]);
    setTitle("");
    setPrice("");
    setTag("");
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <p className="subtitle">Manage Premium Courses</p>

      <div className="admin-form">
        <input
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Tag (Premium / New)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <button onClick={addCourse}>Add Course</button>
      </div>

      <div className="admin-list">
        {courses.map((c, i) => (
          <div key={i} className="admin-card">
            <h4>{c.title}</h4>
            <p>₹ {c.price}</p>
            <span>{c.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
