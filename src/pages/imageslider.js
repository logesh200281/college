import React from 'react';
import { Fade } from 'react-slideshow-image';

// Import your local images
import image1 from '../asset/image/banner.jpg.crdownload';
import image2 from '../asset/image/banner4.jpg.crdownload';
import image3 from '../asset/image/banner5.jpg.crdownload';
import image4 from '../asset/image/IMG-20210301-WA0002-1-new.jpg.crdownload';
import logoimage1 from '../asset/image/OIP1.jpg';
import logoimage2 from '../asset/image/OIP.jpg';

const slideshow = [
  {
    URL: image1,
    caption: 'Caption 1',
  },
  {
    URL: image2,
    caption: 'Caption 2',
  },
  {
    URL: image3,
    caption: 'Caption 3',
  },
  {
    URL: image4,
    caption: 'Caption 4',
  },
];

function ImageSlider() {
  return (
    <div className="relative">
      <Fade>
        {slideshow.map((image, index) => (
          <div key={index}>
            {/* Background image container */}
            <div
              className="w-full h-96 md:h-[500px] bg-cover bg-center transition-all ease-in-out"
              style={{ backgroundImage: `url(${image.URL})` }}
            ></div>

            {/* Buttons with logos */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <img src={logoimage1} alt="Logo" className="h-8 w-8 mr-2" />
                EXAMINATION ACCOUNT
              </button>
              <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 flex items-center justify-center">
                <img src={logoimage2} alt="Logo" className="h-8 w-8 mr-2" />
                APPLY ONLINE PORTAL
            </button>
            </div>
        </div>
        ))}
    </Fade>
    </div>
  );
}

export default ImageSlider;
