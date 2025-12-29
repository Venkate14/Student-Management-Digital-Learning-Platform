import "./CourseCard.css";

export default function CourseCard({ title, price, tag, onBuy }) {
  return (
    <div className="premium-card">
      <span className="badge">{tag}</span>
      <h3>{title}</h3>
      <p className="price">₹{price}</p>
      <button onClick={onBuy}>Buy Premium</button>
    </div>
  );
}
