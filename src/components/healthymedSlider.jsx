import { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

let count = 0;
let slideInterval;
export default function HealthymedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sosmedpict = [
    "/Healthymed1.png",
    "/Healthymed2.png",
    "/healthymed3.png",
    "/healthymed4.png",
    "/healthymed5.png",
    "/healthymed6.png",
    "/healthymed7.png",
    "/healthymed8.png",
  ];

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % sosmedpict.length;
    setCurrentIndex(count);
    // slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const sosmedpictLength = sosmedpict.length;
    count = (currentIndex + sosmedpictLength - 1) % sosmedpictLength;
    setCurrentIndex(count);
    // slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 relative"
    >
      <img
        src={sosmedpict[currentIndex]}
        className="w-[600px] h-64"
        alt="slider2"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 px-1 flex justify-between items-center w-[440px]">
        <button
          onClick={handleOnPrevClick}
          className="bg-gray-500 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <GrFormPrevious size={25} />
        </button>
        <button
          onClick={handleOnNextClick}
          className="bg-gray-500 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <GrFormNext size={25} />
        </button>
      </div>
    </div>
  );
}
