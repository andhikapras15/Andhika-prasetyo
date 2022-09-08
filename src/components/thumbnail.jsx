const Thumbnail = () => {
  return (
    <div className="bg-gray-300 w-full h-screen flex">
      <div className="w-1/2 h-screen">
        <div className="flex pt-5 pl-10">
          <div className="w-8 h-8 rounded-full bg-yellow-400 mr-3"></div>
          <p className="font-bold text-xl">Andhika Prasetyo</p>
        </div>
        <div className="flex justify-end pt-20">
          <img
            className="rounded-full h-96 w-96"
            src="./edit.png"
            alt="homepic"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center pl-7">
        <div className="flex items-center ">
          <div className="w-8 h-8 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-10 h-10 rounded-full bg-yellow-400 mr-3"></div>
          <div className="w-12 h-12 rounded-full bg-yellow-400 mr-3"></div>
        </div>
        <p className="font-bold text-8xl mb-6">Hello</p>
        <p className="font-semibold text-xl">I'Am Andhika Prasetyo</p>
        <p className="font-light">
          Welcome to my website. I'am a fullstack Developer passionate in{" "}
          <br></br>
          Frontend Developer, Web Developer, and Software Developer/Engineer.
          <br></br>
          What do you want to know about me ?
        </p>
        <img src="./arrow3.webp" className="arrow-down" alt="arrow" />
      </div>
    </div>
  );
};

export default Thumbnail;
