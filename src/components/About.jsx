import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a web developer and spend my time working with many different
          aspects of the web like front end (HTML,CSS,Javascript,React-Js). I’m
          extremely passionate about web development and taking my skills to the
          next level is something I do every day. Aside from web development,I
          enjoy to sing and listen to music. My belief that every moment of life
          teaches us a new lesson and gives us the chance of upgrading to the
          better version of our's.
        </p>
      </div>
    </div>
  );
};

export default About;
