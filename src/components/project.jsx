import Sosmed_Slider from "./slider";
import Healthymed_Slider from "./slider2";

const Project = () => {
  return (
    <div className="flex flex-col bg-gray-300 py-16 px-36">
      <div className="  ">
        <p className="font-semibold text-2xl">My Project</p>
        <p className="font-bold text-6xl">
          Work That I've <br></br>Done
        </p>
      </div>
      <div className="flex justify-between my-20 ">
        <div className="  w-[65%]">
          <p className="text-3xl font-semibold">01</p>
          <p className="text-xl font-semibold mb-5">Social Media Project</p>
          <p className="font-light">
            This is my pre-final project where i should to make a social media.{" "}
            <br />
            in this project i used Next.js framework to build the frontend and{" "}
            <br />
            use Node.js for backend by using express.js framework, for database{" "}
            <br />I used MySQL.
          </p>
        </div>
        <Sosmed_Slider />
      </div>
      <div className="flex justify-between mt-14 mb-20">
        <Healthymed_Slider />
        <div className="ml-16 w-[65%]">
          <p className="text-3xl font-semibold">02</p>
          <p className="text-xl font-semibold mb-5">Healthymed Project</p>
          <p className="font-light">
            This is my final project where i should to make an e-commerce
            website that sells medicines and medical devices. in this project i
            used Next.js framework to build the frontend and use Node.js for
            backend by using express.js framework, for database I used MySQL. in
            this project I got to do authentication/authorization and also user
            transactions starting from add to cart to payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
