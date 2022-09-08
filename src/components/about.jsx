import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex h-full ">
      <div className="w-1/2 py-16 pl-36 flex flex-col justify-center">
        <p className="text-5xl font-bold mb-5">About Me</p>
        <p className="font-light">
          Freshgraduate of Marine Science from Brawijaya University. Some time
          after graduation I tried to expand my hard skills and I am interested
          in getting into the world of information technology. I signed up for
          Purwadhika Digital Technology School and take the full stack web
          development program. Have an interest in Front-End developer.
        </p>
        <p className="font-semibold text-xl mt-10 mb-3">Skills</p>
        <div className="flex items-center">
          <p className="mr-3 text-sm">Javascript</p>
          <img src="./js.png" className="w-4 h-4" alt="js" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-[300px] h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">80%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-sm">HTML & CSS</p>
          <img src="./html.png" className="w-7 h-4" alt="html" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-[300px] h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">80%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-sm">React.js</p>
          <img src="./react.png" className="w-4 h-4" alt="react" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-72 h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">75%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-sm">Next.js</p>
          <img src="./next.png" className="w-5 h-4" alt="next" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-[300px] h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">80%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-sm">Node.js</p>
          <img src="./node.png" className="w-5 h-4" alt="node" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-72 h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">75%</p>
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-sm">MySQL</p>
          <img src="./MySQL.png" className="w-5 h-4" alt="mysql" />
        </div>
        <div className="flex items-center">
          <div className="w-96 h-4 border-2 mr-3">
            <div className="w-72 h-3 bg-slate-600"></div>
          </div>
          <p className="text-sm font-light">75%</p>
        </div>
      </div>
      <div className="w-1/2  bg-gray-300 relative">
        <div className="flex items-center justify-end mt-10">
          <div className="w-8 h-8 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-10 h-10 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-12 h-12 rounded-full bg-yellow-400 mr-3"></div>
        </div>
        <div className="absolute left-52 top-48 rounded-xl bg-gray-600 w-64 h-[320px]"></div>
        <div className="flex justify-center items-center ">
          <img
            src="./Andhika.png"
            alt="profile"
            className="w-64 h-[320px] mt-20 rounded-xl relative"
          />
        </div>
        <a
          href="./cv-andhika-prasetyo.pdf"
          download="./cv-andhika-prasetyo.pdf"
          className="flex justify-center items-center mt-9 ml-3"
        >
          <button
            type="submit"
            className="p-2 rounded-md bg-gray-600 text-xs hover:bg-gray-800 font-light flex justify-center items-center"
          >
            Download CV <AiOutlineDownload size={17} />
          </button>
        </a>
        <div className="flex items-center justify-start mt-24 ml-3">
          <div className="w-12 h-12 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-10 h-10 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 mr-3"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
