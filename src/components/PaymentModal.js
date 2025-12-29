import "./PaymentModal.css";

export default function PaymentModal({ course, price, onClose }) {

  const payNow = () => {
    const options = {
  key: "rzp_test_1234567890", // demo key
  amount: price * 100,
  currency: "INR",
  name: "Smart Learning Platform",
  description: course,

  method: {
    upi: true,
    card: true,
    netbanking: true,
    wallet: true
  },

  handler: function () {
    alert("Payment Successful (Demo)");
    onClose();
  },

  theme: {
    color: "#5f3dc4"
  }
};


    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="overlay">
      <div className="payment-card">
        <h2>Premium Checkout</h2>
        <p className="course">{course}</p>
        <p className="amount">₹ {price}</p>

        <button className="pay-btn" onClick={payNow}>
          Pay Securely
        </button>

        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
