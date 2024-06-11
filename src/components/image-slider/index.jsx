import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?pages=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data. Please wait</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occurred!. {errorMessage}</div>;
  }

  function handlePrevious() {
    console.log("Previous");
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    console.log("Next");
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <div className="carousel-wrapper">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow_left"
        />

        {images?.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                className={currentSlide === index ? "active" : ""}
                src={image.download_url}
                alt="my title"
                width={"100%"}
              />
            ))
          : null}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow_right"
        />
        <span className="circle-indicators">
          {images?.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={`${
                    currentSlide === index ? "active" : ""
                  } current-indicator`}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
