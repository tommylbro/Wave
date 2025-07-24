import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io("http://localhost:5000");

export default function Streamroom() {
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    socket.on('chat', msg => setMessages(prev => [...prev, msg]));
  }, []);

  return (
    <div className="p-4 bg-twilight text-white font-body">
      <h2 className="text-xl font-myth">Live Oracle Stream</h2>
      <div className="mt-4">{messages.map((m, i) => <p key={i}>{m}</p>)}</div>
    </div>
  );
}
