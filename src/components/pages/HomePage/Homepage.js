import React from "react";
import "./HomePage.scss";
import ss1 from "../../../Assets/images/background-image.webp";
import ss2 from "../../../Assets/images/background-image2.webp";
import ss3 from "../../../Assets/images/background-image3.webp";
import ss4 from "../../../Assets/images/background-image4.webp";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// const images = [
//   "src/Assets/images/background-image.webp",
//   "src/Assets/images/background-image.webp",
//   "src/Assets/images/background-image.webp",
// ];
// const delay = 2500;

const slides = [
  {
    slideshow: ss1,
  },
  {
    slideshow: ss2,
  },
  {
    slideshow: ss3,
  },
  {
    slideshow: ss4,
  },
];
function Homepage() {
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef = React.useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

  // return (
  //   <div className="slideshow">
  //     <div
  //       className="slideshowSlider"
  //       style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
  //     >
  //       {images.map((item, index) => (
  //         <img src={item} className="slide" key={index}></img>
  //       ))}
  //     </div>

  //     <div className="slideshowDots">
  //       {images.map((_, idx) => (
  //         <div
  //           key={idx}
  //           className={`slideshowDot${index === idx ? " active" : ""}`}
  //           onClick={() => {
  //             setIndex(idx);
  //           }}
  //         ></div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.slideshow} alt="products" className="image-class" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Homepage;
