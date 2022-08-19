import React from "react";
import banking from "../assets/portfolio/basic_banking.png";
import blogs from "../assets/portfolio/blogs.png";
import decor from "../assets/portfolio/homedecor.png";
import chat from "../assets/portfolio/gochat.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: decor,
      link: "https://github.com/karansaini2/homedecor",
    },
    {
      id: 2,
      src: portfolio,
      link: "https://github.com/karansaini2/Basic_Bank_System",
    },
    {
      id: 3,
      src: banking,
      link: "https://github.com/karansaini2/Basic_Bank_System",
    },

    {
      id: 4,
      src: blogs,
      link: "https://github.com/karansaini2/app",
    },
    {
      id: 5,
      src: chat,
      link: "https://github.com/karansaini2/files",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                style={{
                  height: "220px",
                  width: "100%",
                }}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-1 duration-200 hover:scale-105">
                  <a href={link}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
