import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChat([...chat, { sender: "user", text: message }]);

    try {
      const response = await axios.post("http://127.0.0.1:5000/chatbot", { message });
      const botReply = response.data.response;

      // Add bot response to chat
      setChat([...chat, { sender: "user", text: message }, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setMessage("");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Chatbot</h2>

      <div className="h-64 overflow-y-auto p-2 border border-gray-300 rounded mb-4">
        {chat.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`p-2 rounded inline-block ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          className="flex-grow mr-2"
        />
        <Button onClick={sendMessage} className="px-4 py-2">Send</Button>
      </div>
    </div>
  );
};

export default Chatbot;
