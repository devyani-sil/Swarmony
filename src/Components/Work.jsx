import React, { useState, useEffect } from 'react';

const Work = () => {
  const musicians = [
    "Darshan Raval's guitarist?",
    "Taylor Swift's drummer?",
    "A.R. Rahman's pianist?",
    "Hans Zimmer's sound designer?",
    "Kaushiki Chakraborty, Hindustani classical singer?",
    "Eminem's rapper?",
    // Add more musicians as needed
  ];

  const [currentMusicianIndex, setCurrentMusicianIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMusicianIndex((prevIndex) => (prevIndex + 1) % musicians.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [musicians.length]);

  return (
    <div className="text-center py-8 bg-slate-100 p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4">Want to work with</h2>
      <h3 className="text-2xl mb-4">
        {musicians.map((musician, index) => (
          <span key={index} className={index === currentMusicianIndex ? 'block' : 'hidden'}>
            {musician}
          </span>
        ))}
      </h3>
      <p className="text-lg text-gray-600">Now you can , through Swarmony</p>
    </div>
  );
};

export default Work;
