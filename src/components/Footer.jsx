import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-20 px-8 bg-gray-800/50  h-full text-white">
      <div className="max-w-4xl mx-auto bg-gray-950  font-mulish border rounded-lg p-6 flex flex-col md:flex-row justify-between">
        <div className="logo flex flex-col justify-end mb-6 md:mb-0">
          <p className="second-font text-5xl">
            Mayank
            <br />
            Sagar.
          </p>
        </div>
        <div className="flex flex-row space-x-12">
          <div className="menu mb-6 md:mb-0">
            <h3 className="text-gray-200 font-medium font-mulish mb-4">Explore</h3>
            <ul className="flex flex-col font-inter text-gray-400 font-light">
              <li>
                <a href="/" className="hover:font-normal hover:underline hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:font-normal hover:underline hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:font-normal hover:underline hover:text-gray-200">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3 className="text-gray-200 mb-4">Socials</h3>
            <ul className="flex flex-col text-gray-400 font-inter font-light">
              <li>
                <a href="mailto:mayanksagar963@gmail.com" target="_blank" className="hover:underline hover:text-gray-200">
                  Email
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/mayank-sagar-2a2b462bb/" className="hover:underline hover:text-gray-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/mayanksagar1" className="hover:underline hover:text-gray-200">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" href="https://x.com/MayankSagar01" className="hover:underline hover:text-gray-200">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 max-w-4xl mx-auto text-gray-400 font-inter flex justify-between">
        <p>© {new Date().getFullYear()}</p>
        <p>Mayank Sagar.</p>
      </div>
    </div>
  );
};

export default Footer;
