"use client";

import { useEffect, useState } from 'react';

export function Greeting() {
  const [greeting, setGreeting] = useState('Good evening');
  
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
    };
    
    setGreeting(getGreeting());
  }, []);
  
  return (
    <h1 className="text-3xl font-bold">{greeting}</h1>
  );
}