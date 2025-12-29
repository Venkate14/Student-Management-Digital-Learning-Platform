import "./PDFCard.css";

export default function PDFCard({ title, unlocked }) {
  return (
    <div className="pdf-card">
      <h4>{title}</h4>

      {unlocked ? (
        <a href="#" download>
          <button>Download PDF</button>
        </a>
      ) : (
        <button className="locked" disabled>
          🔒 Locked
        </button>
      )}
    </div>
  );
}
