import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
  const { userId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-myth">Oracle Profile: {userId}</h1>
      {/* User's posts, bio, followers, etc */}
    </div>
  );
}
