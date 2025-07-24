import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';

export default function Feed() {
  return (
    <div className="p-4 font-body text-deep">
      <h1 className="font-myth text-2xl">Divine Feed</h1>
      {/* Render posts */}
      <div className="bg-parchment mt-4 p-2 rounded-xl shadow">
        <p className="font-myth">Athena posted a scroll.</p>
        <p>"Wisdom begins in wonder..."</p>
      </div>
    </div>
  );
}
