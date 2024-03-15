import React, { useEffect } from 'react';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';

const Carousal = () => {
  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    
    nextButton.onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    };

    prevButton.onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
    };
  }, []);

  return (
    <div className="slider-container ">
      <div className="contain ">
        <div id="slide" >
            
          <div className="item" >
          <img src={pic1} alt="Pic 1"  className="w-full h-full object-cover"  />
            <div className="content text-black">
              <div className="name">SWARMONY</div>
              <div className="des">The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire</div>
              <button >See more</button>
            </div>
          </div>
          {/* Add other carousel items here */}
          <div className="item" style={{ backgroundImage: 'linear-gradient(to right, white, black)' }}>
          <img src={pic2} alt="Pic 1" className="w-full h-full object-cover" />
            <div className="content" style={{ color: 'white' }}>
              <div className="name">SWARMONY</div>
              <div className="des">The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire</div>
              <button>See more</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'linear-gradient(to right, white, black)' }}>
          <img src={pic3} alt="Pic 1" className="w-full h-full object-cover"  />
            <div className="content text-black" >
              <div className="name">SWARMONY</div>
              <div className="des">hello</div>
              <button>See more</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'linear-gradient(to right, white, black)' }}>
          <img src={pic4} alt="Pic 1" className="w-full h-full object-cover"  />
            <div className="content" style={{ color: 'black' }}>
              <div className="name">SWARMONY</div>
              <div className="des">The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire</div>
              <button>See more</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'linear-gradient(to right, white, black)' }}>
          <img src={pic5} alt="Pic 1" className="w-full h-full object-cover"  />
            <div className="content" style={{ color: 'white' }}>
              <div className="name">SWARMONY</div>
              <div className="des">The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire</div>
              <button>See more</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'linear-gradient(to right, white, black)' }}>
          <img src={pic6} alt="Pic 1" className="w-full h-full object-cover"  />
            <div className="content" style={{ color: 'black' }}>
              <div className="name">SWARMONY</div>
              <div className="des">The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire</div>
              <button>See more</button>
            </div>
          </div>


        </div>

        <div className="buttons">
          <button id="prev"><i className="fa-solid fa-angle-left"></i></button>
          <button id="next"><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
