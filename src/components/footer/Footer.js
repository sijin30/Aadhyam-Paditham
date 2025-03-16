import React from 'react';

const footerSections = [
  {
    title: 'About',
    links: ['About Us', 'Careers', 'Contact Us', 'Blog', 'Investors', 'Discovery Aadhyam Paditham']
  },
  {
    title: 'Get Started',
    links: ['Get the App', 'Teach on Aadhyam Paditham', 'Plans and Pricing', 'Affiliate', 'Help and Support']
  },
  {
    title: 'Business',
    links: ['Aadhyam Paditham for Business', 'Aadhyam Paditham Business']
  },
  {
    title: 'Legal & Accessibility',
    links: ['Accessibility Statement', 'Privacy Policy', 'Sitemap', 'Terms']
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#f4f1de] text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-400 pb-2">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="/" className="hover:text-orange-500 transition duration-300 ease-in-out">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-700 mt-10 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Aadhyam Paditham. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
