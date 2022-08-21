import React from "react";
import banking from "../assets/portfolio/basic_banking.jpg";
import blogs from "../assets/portfolio/blogs.png";
import decor from "../assets/portfolio/homedecor.jpg";
import chat from "../assets/portfolio/gochat.png";
import portfolio from "../assets/portfolio/portfolio.png";
import crypto from "../assets/portfolio/crypto.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: decor,
      link: "https://github.com/karansaini2/homedecor",
      title: "Home Decor",
    },
    {
      id: 2,
      src: portfolio,
      link: "https://github.com/karansaini2/MyPortfolio",
      title: "Porfolio",
    },
    {
      id: 3,
      src: crypto,
      link: "https://github.com/karansaini2/cryptocurrency",
      title: "Crypto Tracker",
    },
    {
      id: 4,
      src: banking,
      link: "https://github.com/karansaini2/Basic_Bank_System",
      title: " Banking System",
    },

    {
      id: 5,
      src: blogs,
      link: "https://github.com/karansaini2/app",
      title: "Blogs",
    },
    {
      id: 6,
      src: chat,
      link: "https://github.com/karansaini2/files",
      title: "Go Chat",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white lr:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, title }) => (
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
              <div className=" flex items-center justify-center">
                <h3
                  style={{
                    textAlign: "center",
                    marginLeft: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  {title}
                </h3>
                <button
                  className="w-1/2 px-5 py-2 m-3 duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "rgb(63,94,251)",
                    borderRadius: "10px",
                    marginLeft: "70px",
                  }}
                >
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
