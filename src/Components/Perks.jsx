import React from 'react';
import perk1 from '../assets/perk1.png';
import perk2 from '../assets/perk2.png';
import perk3 from '../assets/perk3.png';

const Perks = () => {
  const perks = [
    {
      id: 1,
      image: perk1,
      title: 'Collaborate Easily',
      description: 'Connect with musicians worldwide and collaborate seamlessly on your projects.',
    },
    {
      id: 2,
      image: perk2,
      title: 'Discover Talent',
      description: 'Explore a diverse range of talented musicians and expand your creative network.',
    },
    {
      id: 3,
      image: perk3,
      title: 'Professional Support',
      description: 'Get professional support and guidance from industry experts to elevate your music career.',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Discover the Perks of Swarmony</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {perks.map((perk) => (
          <div key={perk.id} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
            <img src={perk.image} alt={perk.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
            <p className="text-gray-600">{perk.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
