import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';
import cat6 from '../assets/cat6.png';

const Categories = () => {
  const categories = [
    { id: 1, imgSrc: cat1, title: 'Singer', description: 'Hire professional singers for your projects', link: "/delve" },
    { id: 2, imgSrc: cat2, title: 'Guitarist', description: 'Find skilled guitarists for your music needs', link: "/delve" },
    { id: 3, imgSrc: cat3, title: 'Rappers', description: 'Discover talented rappers for collaborations', link: "/delve" },
    { id: 4, imgSrc: cat4, title: 'Songwriter', description: 'Connect with experienced songwriters to craft your music', link: "/delve" },
    { id: 5, imgSrc: cat5, title: 'Classical Artist', description: 'Explore classical singers for classical music projects', link: "/delve" },
    { id: 6, imgSrc: cat6, title: 'Music Producers', description: 'Unleash your creativity and produce professional-grade tracks with top-notch equipment and software.', link: "/delve" }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Discover Top Music Production Pros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <Link to={category.link} key={i}>
            <Item id={category.id} imgSrc={category.imgSrc} title={category.title} description={category.description} />
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/more-categories">
          <button className="bg-[#201a65] font-medium text-white px-4 py-2">
            More Categories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
