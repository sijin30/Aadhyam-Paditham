import React from 'react';
import homeImg from '../../../Assets/home-img.png';


const Home = () => {
  return (
    <section className="min-h-screen bg-white pt-10">

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ml-10">
          
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold font-sans leading-snug mb-6 text-gray-900 leading-[40px]">
              Unlock the<br />Joy of Learning
            </h1>
            <p className="text-gray-700 font-light font-sans text-lg leading-relaxed mb-6">
              Step into a world where knowledge sparks inspiration.
              At <span className="font-semibold text-black">Aadhyam Paditham</span>, we believe learning should be engaging, accessible, and empowering.<br />
              Whether you're beginning your journey or advancing your skills,
              we’re here to make every step purposeful and enjoyable.
              Because when learning becomes joyful, growth knows no limits.
            </p>

           
            <a
              href="#courses"
              className="inline-block px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-[#f4f1de] transition duration-300 hover:text-black transition duration-300"
            >
              Explore Courses
            </a>
          </div>

          <div className="lg:w-1/2 flex justify-center py-5">
            <img
              src={homeImg}
              alt="Learning Illustration"
              className="w-full max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

