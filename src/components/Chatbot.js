import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I help you?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "This is a dummy reply." }]);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      {open && (
        <div style={{ width: "300px", height: "400px", border: "1px solid gray", borderRadius: "10px", background: "white", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.from === "bot" ? "left" : "right" }}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              style={{ flex: 1, padding: "5px" }}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ padding: "10px", borderRadius: "50%", background: "#0077b6", color: "white" }}>
        Chat
      </button>
    </div>
  );
}

export default Chatbot;
