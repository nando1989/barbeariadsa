import { useState, useEffect } from "react";

export default function Slider() {
    const images = [
    "/slide/3w.webp",
    "/slide/6w.webp",
    "/slide/4w.webp",
    "/slide/5w.webp",
    "/slide/7w.webp",
    "/slide/8w.webp",
    "/slide/9w.webp",
    "/slide/10w.webp",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (<>
    <div className="relative  mx-auto overflow-hidden  shadow-lg mt-2">
     
      <div className="w-auto h-auto relative ">
        
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-6">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
        >
          ▶
        </button>
      </div>

      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
    </div></>
  );
}
