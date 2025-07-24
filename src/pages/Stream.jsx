import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import React from 'react';
import './Stream.css';  // Import custom CSS for Stream page
const socket = io("http://localhost:5000");

export default function Stream() {
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
      
  useEffect(() => {
    socket.on("chat", (m) => setChat((c) => [...c, m]));
  }, []);

  const sendMsg = () => {
    socket.emit("chat", msg);
    setMsg("");
  };

  return (
    <div className="p-4 font-body text-white bg-deep h-screen">
      <h1 className="text-2xl font-myth">Live Oracle Stream</h1>
      <div className="mt-4 bg-parchment text-deep p-2 rounded h-64 overflow-y-scroll">
        {chat.map((c, i) => <div key={i}>{c}</div>)}
      </div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="w-full mt-2 p-2 rounded"
        placeholder="Speak your truth..."
      />
      <button onClick={sendMsg} className="mt-2 bg-bronze p-2 rounded text-white">
        Send
      </button>
    </div>
  );
}
