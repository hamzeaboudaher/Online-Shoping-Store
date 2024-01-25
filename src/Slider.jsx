// import { useState, useEffect } from "react";
// import back from "./assets/left-arrow.svg";
// import next from "./assets/next-arrow.svg";

// function Slider() {

//     const imagesArray = [
//         "https://i.pinimg.com/originals/e6/72/c9/e672c9fe478daac0019c9235e3a9794c.jpg",
//         "https://i.pinimg.com/originals/10/11/bc/1011bcc380b230ecb422589c990e38ec.jpg",
//         "https://littlelosttravel.com/wp-content/uploads/2020/11/Finland.jpg",
//         "https://littlelosttravel.com/wp-content/uploads/2020/11/Hawaii-jelle-de-gie-u.jpg",
//         " https://littlelosttravel.com/wp-content/uploads/2020/11/Morocco-sergey-pesterev-u.jpg",
//       ];

//   const [pic, setPic] = useState([]);
//   const [currentPic, setCurrentPic] = useState(0);

//   useEffect(() => {
//     fetch(
//       "https://pixabay.com/api/?key=39188443-87856017dcf0cbab4b19708f6&q=yellow+flowers&image_type=photo"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setPic(data.hits);
//         setCurrentPic(0);
//       });
//   }, []);

//   const [activeImage, setActiveImage] = useState(0);

//   const goToNextImage = () => {
//     if (activeImage === imagesArray.length - 1) {
//       setActiveImage(0);
//       return;
//     }
//     setActiveImage(activeImage + 1);
//   };

//   const goToPreviousImage = () => {
//     if (activeImage === 0) {
//       setActiveImage(imagesArray.length - 1);
//       return;
//     }
//     setActiveImage(activeImage - 1);

//   return (
//     <>
//       <main>
//         <section>
//           <div>
//             <img
//               src={back}
//               alt=""
//               width={50}
//               height={50}
//               className="icon-left"
//               onClick={goToPreviousImage}
//             />

//             <img
//               src={next}
//               alt=""
//               width={50}
//               height={50}
//               className="icon-right"
//               onClick={goToNextImage}
//             />
//             <img src={imagesArray[activeImage]} alt="" className="main-image" />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// export default Slider;

import back from "./assets/left-arrow.svg";
import next from "./assets/next-arrows.svg";
import "./Login/Login.css";
import { useState } from "react";

const imagesArray = [
  "https://i.pinimg.com/originals/e6/72/c9/e672c9fe478daac0019c9235e3a9794c.jpg",
  "https://i.pinimg.com/originals/10/11/bc/1011bcc380b230ecb422589c990e38ec.jpg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Finland.jpg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Hawaii-jelle-de-gie-u.jpg",
  " https://littlelosttravel.com/wp-content/uploads/2020/11/Morocco-sergey-pesterev-u.jpg",
];

function Slider() {
  const [activeImage, setActiveImage] = useState(0);

  const goToNextImage = () => {
    if (activeImage === imagesArray.length - 1) {
      setActiveImage(0);
      return;
    }
    setActiveImage(activeImage + 1);
  };

  const goToPreviousImage = () => {
    if (activeImage === 0) {
      setActiveImage(imagesArray.length - 1);
      return;
    }
    setActiveImage(activeImage - 1);
  };

  return (
    <>
      <main>
        <section>
          <div>
            <img
              src={back}
              alt=""
              width={50}
              height={50}
              className="icon-left"
              onClick={goToPreviousImage}
            />

            <img
              src={next}
              alt=""
              width={50}
              height={50}
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
