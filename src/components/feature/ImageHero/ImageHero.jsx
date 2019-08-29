//Dependencies
import React from "react";

//CSS
import "./ImageHero.css";

const ImageHero = (props) => {
  return (
    <div className="imageQuoteUnder-wrapper">
      <div className="imageQuoteUnder-imageContainer">
        <div className="imageQuoteUnder-ImageDiv">
          <img alt="cohort 10" className="imageQuoteUnder-Image" src={props.url} />
          <div className="test">
            <p className="imageQuoteUnder-overlayText">{props.title}</p>
          </div>
        </div>
      </div>
      {/* <div className="imageQuoteUnder-quoteDiv">
        <p className="imageQuoteUnder-quoteText">
            {props.quote}
        </p>
        <p className='imageQuoteUnder-quoteAuthor'>
            {props.author}
        </p>
      </div> */}
    </div>
  );
};

export default ImageHero;
