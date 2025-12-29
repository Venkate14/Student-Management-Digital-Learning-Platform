import CourseCard from "../components/CourseCard";
import Chatbot from "../components/Chatbot";

function Dashboard() {
  const courses = [
    { id: 1, title: "React Basics", description: "Learn React from scratch", price: 100 },
    { id: 2, title: "Node.js Fundamentals", description: "Learn Node.js for backend", price: 150 },
    { id: 3, title: "Fullstack Project", description: "Build real projects", price: 200 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Dashboard</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Chatbot />
    </div>
  );
}

export default Dashboard;
