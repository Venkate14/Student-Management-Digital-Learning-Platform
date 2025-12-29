import { useState } from "react";
import CourseCard from "../components/CourseCard";
import PaymentModal from "../components/PaymentModal";
import PDFCard from "../components/PDFCard";
import "./Dashboard.css";

export default function Dashboard() {
  const [payment, setPayment] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="dashboard">
      <h2>Premium Learning Dashboard</h2>
      <p className="subtitle">Pay once and unlock all resources</p>

      <div className="course-grid">
        <CourseCard
          title="Full Stack Web Development"
          price="1999"
          tag="Premium"
          onBuy={() =>
            setPayment({
              course: "Full Stack Web Development",
              price: 1999,
            })
          }
        />
      </div>

      <h3 style={{ marginTop: 50 }}>Course PDFs</h3>

      <div className="course-grid">
        <PDFCard title="HTML & CSS Notes" unlocked={unlocked} />
        <PDFCard title="JavaScript Guide" unlocked={unlocked} />
        <PDFCard title="React Handbook" unlocked={unlocked} />
      </div>

      {payment && (
        <PaymentModal
          course={payment.course}
          price={payment.price}
          onClose={() => {
            setUnlocked(true); // unlock PDFs
            setPayment(null);
          }}
        />
      )}
    </div>
  );
}
