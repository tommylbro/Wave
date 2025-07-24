import React from 'react';
import './Media.css';

export default function Media() {
  return (
    <div className="p-4 font-body">
      <h1 className="font-myth text-2xl mb-4">Sacred Sounds</h1>
      <div className="bg-parchment p-4 rounded-lg">
        <h2 className="text-xl font-myth">Apollo's Anthem</h2>
        <audio controls className="w-full mt-2">
          <source src="/media/apollo.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
