import React from 'react';
import img1 from '../../../Assets/2149241223.jpg';

const Courses = () => {
  const courses = [
    {
      title: 'IBM AI Foundations for Business',
      provider: 'IBM',
      type: 'Specialization',
      image: img1,
      link: 'https://www.coursera.org/learn/ibm-ai-foundations',
    },
    {
      title: 'Deep Learning',
      provider: 'DeepLearning.AI',
      type: 'Specialization',
      note: 'Build toward a degree',
      image: img1,
      link: 'https://www.coursera.org/specializations/deep-learning',
    },
    {
      title: 'IBM Generative AI Engineering',
      provider: 'IBM',
      type: 'Professional Certificate',
      image: img1,
      link: 'https://www.coursera.org/professional-certificates/ibm-generative-ai',
    },
    {
      title: 'IBM AI Engineering',
      provider: 'IBM',
      type: 'Professional Certificate',
      note: 'Build toward a degree',
      image: img1,
      link: 'https://www.coursera.org/professional-certificates/ai-engineer',
    },
  ];

  return (
    <section className="py-10 bg-white mt-20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-semibold text-center mb-8">Most Popular Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f4f1de] p-3 rounded-xl shadow-sm text-center transform transition duration-300 hover:scale-105 hover:shadow-lg block"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-28 object-contain mb-3 rounded-sm"
              />
              <h4 className="text-sm font-semibold text-gray-800">{course.provider}</h4>
              <p className="text-sm font-medium mt-1 text-gray-900">{course.title}</p>
              <p className="text-xs text-gray-600 mt-1">{course.type}</p>
              {course.note && (
                <p className="text-xs text-gray-500 mt-1 italic">{course.note}</p>
              )}
            </a>
          ))}
          
        </div>
        <a
              href="#courses"
              className=" text-balance mt-20 inline-block px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-[#f4f1de] transition duration-300 hover:text-black ml-100 "
            >
              More courses
            </a>
       
      </div>
      
    </section>
  );
};

export default Courses;
