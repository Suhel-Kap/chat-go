import React from "react";
import Message from "./Message";

type ChatHistoryProps = {
  messages: {
    text: string;
    sender: string;
    timestamp: string;
  }[];
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default ChatHistory;
