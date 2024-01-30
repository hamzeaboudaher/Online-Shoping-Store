import back from "./assets/left-arrow.svg";
import next from "./assets/next-arrows.svg";
import "./Login/Login.css";
import { useState } from "react";



function Slider({ imagesArray }) {
  const [activeImage, setActiveImage] = useState(0);

  const goToNextImage = () => {
    setActiveImage(
      (prevActiveImage) => (prevActiveImage + 1) % imagesArray.length
    );
  };

  const goToPreviousImage = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === 0 ? imagesArray.length - 1 : prevActiveImage - 1
    );
  };

  if (!imagesArray || imagesArray.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <section>
          <div>
            {/* Replace back and next with your navigation icons */}
            <img
              src={back}
              alt="Previous"
              width={40}
              height={40}
              className="icon-left"
              onClick={goToPreviousImage}
            />
            <img
              src={next}
              alt="Next"
              width={40}
              height={40}
              className="icon-right"
              onClick={goToNextImage}
            />
            <img src={imagesArray[activeImage]} alt="" className="main-image" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Slider;