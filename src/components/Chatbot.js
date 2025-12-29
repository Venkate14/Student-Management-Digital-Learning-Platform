import { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: "This feature will connect to AI backend." }
    ]);
    setInput("");
  };

  return (
    <>
      <div className="chatbot-btn" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chatbot-box">
          <h4>AI Assistant</h4>

          <div className="chat-area">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
