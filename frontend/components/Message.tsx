import React from 'react';

type MessageProps = {
  text: string;
  sender: string;
  timestamp: string;
};

const Message: React.FC<MessageProps> = ({ text, sender, timestamp }) => {
  return (
    <div className="flex flex-col items-start my-2">
      <div className="bg-zinc-700 rounded-lg p-2">
        <p className="text-sm">{text}</p>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {sender} • {timestamp}
      </p>
    </div>
  );
};

export default Message;