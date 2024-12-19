import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { HfInference } from "@huggingface/inference";
import "./chatBot.css";
import Background from "../components/Background";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const client = new HfInference(import.meta.env.VITE_CHAT_BOT_API_KEY);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user's message to chat
    const userMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserInput("");

    let out = "";

    try {
      const stream = client.chatCompletionStream({
        model: "01-ai/Yi-1.5-34B-Chat",
        messages: [
          ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
          { role: "user", content: userInput },
        ],
        temperature: 0.5,
        max_tokens: 100,
        top_p: 0.7,
      });

      for await (const chunk of stream) {
        if (chunk.choices && chunk.choices.length > 0) {
          const newContent = chunk.choices[0].delta.content;
          out += newContent;
          setBotResponse(out); // Update the response as it streams
        }
      }

      // Add bot response after the stream is complete
      const botMessage = { role: "Bot", content: out };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
        
    <div className="chatbotApp">
    <Background/>
    <div className="chatbot">
    
      <div className="Botbody">
        <div className="chat-window">
          {messages.length > 0 ? (
            messages.slice(-2).map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.role === "user" ? "You: " : "Bot: "}
                {msg.content}
              </div>
            ))
          ) : (
            <div className="message">Hello! How can I help you?</div>
          )}
        </div>
          <div className="inputChat">
            
        <input
          type="text"
          placeholder="Ask something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={sendMessage}>
          <FaPaperPlane style={{fontSize : "28px"}}/>
        </button>
          </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ChatBot;
