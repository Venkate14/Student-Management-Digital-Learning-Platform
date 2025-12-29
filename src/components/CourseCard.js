import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", width: "250px", borderRadius: "10px" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Price: ₹{course.price}</p>
      <Link to="/payment">
        <button style={{ padding: "5px 10px" }}>Buy Now</button>
      </Link>
    </div>
  );
}

export default CourseCard;
