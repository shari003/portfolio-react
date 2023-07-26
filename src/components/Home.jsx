/* eslint-disable react/no-unescaped-entities */
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="bg-[#0a192f] w-full h-screen">
        <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center ">
          <p className="text-yellow-500 text-2xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Shri Hari
          </h1>
          <h2 className="py-1 text-3xl sm:text-5xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer and Deep Learning Engineer
          </h2>
          {/* <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate Engineering student with expertise in Deep Learning and Full-stack Web Dev. Excels at creating impactful software solutions for diverse clients, from individuals to small businesses.
          </p> */}
          <div className="my-2">
            <Link to="projects" smooth={true} duration={500}>
              <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500">
                View Projects
                <HiArrowRight className="ml-2 group-hover:rotate-90 duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
