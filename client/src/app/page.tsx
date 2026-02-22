"use client"
import { useState, useEffect } from "react";

function Chat() {
  const [message, setMessage] = useState(""); // input value
  const [messages, setMessages] = useState([]); // list of all messages
  const [socket, setSocket] = useState(null);

  // Initialize WebSocket on component mount
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081");
    // @ts-ignore
    setSocket(ws);
    ws.onopen = () => {
      console.log("Connected to server");
    };
    ws.onmessage = (event) => {
      console.log("Received:", event.data);
      // @ts-ignore
      setMessages((prev) => [...prev, `${event.data}`]);
    };
    return () => ws.close();
  }, []);

  const sendMsg = () => {
    if (socket && message.trim() !== "") {
      // @ts-ignore
      socket.send(message);
      // @ts-ignore
      setMessages((prev) => [...prev, `Client: ${message}`]); // add sent message to messages
      setMessage(""); // clear input
    }
  };

  return (
    <div >
      <div
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"

      />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}

export default Chat;