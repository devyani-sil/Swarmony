// Item.js

import React from 'react';

const Item = ({ id, imgSrc, title, description }) => {
  return (
    <div className="relative bg-gray-100 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer h-60">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black bg-opacity-50">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default Item;
