import react, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

let count = 0;
let slideInterval;
export default function Sosmed_Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sosmedpict = [
    "/sosmed1.png",
    "/sosmed2.png",
    "/sosmed3.png",
    "/sosmed5.png",
    "/sosmed7.png",
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
    // startSlider();
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
      className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <img
        src={sosmedpict[currentIndex]}
        className="w-[520px] h-64"
        alt="slider1"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 px-1 flex justify-between items-center w-[438px]">
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
