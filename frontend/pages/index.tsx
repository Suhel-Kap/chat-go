import ChatHistory from '@/components/ChatHistory';
import ChatInput from '@/components/ChatInput';
import Header from '@/components/Header';
import { connect, sendMsg } from '@/utils/connect';
import React, { useEffect, useState } from 'react';

export type Message = {
  text: string;
  sender: string;
  timestamp: string;
};

const ChatPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  useEffect(() => {
    connect((message: Message) => {
      setChatMessages((chatMessages) => [...chatMessages, message]);
    });
  }, []);

  const handleSend = (message: string) => {
    const newMessage: Message = {
      text: message,
      sender: 'Alice',
      timestamp: new Date().toLocaleTimeString(),
    };
    sendMsg(newMessage);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col p-4 h-screen">
        <div className="overflow-y-auto flex-grow">
          <ChatHistory messages={chatMessages} />
        </div>
        <div className="sticky bottom-4">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;