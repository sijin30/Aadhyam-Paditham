import React from 'react';
import aiImg from '../../../Assets/ai.png';

const AiAssistance = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Use lg:flex-row (not flex-col-reverse) so text comes first on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ml-10">
          
          {/* Left Section - Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold font-sans leading-snug mb-6 text-gray-900 leading-[40px]">
              AI Course Assistance<br />Tailored Just For You
            </h1>
            <p className="text-gray-700 font-light font-sans text-lg leading-relaxed mb-6">
              Let AI guide you to the right learning path!<br />
              Get personalized suggestions for courses based on your interests, goals, and career domains.<br />
              Click below to chat with our AI Assistant and discover your perfect course fit.
            </p>

            <a
              href="/course-chatbot"
              className="inline-block px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-[#f4f1de] transition duration-300 hover:text-black"
            >
              Talk to AI Assistant
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 flex justify-center py-5">
            <img
              src={aiImg}
              alt="AI Assistant"
              className="w-full max-w-md object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistance;
