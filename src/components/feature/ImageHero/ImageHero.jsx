//Dependencies
import React from "react";

//CSS
import "./ImageHero.css";

const ImageQuoteUnder = () => {
  return (
    <div className="imageQuoteUnder-wrapper">
      <div className="imageQuoteUnder-imageContainer">
        <div className="imageQuoteUnder-ImageDiv">
          <img
            alt="cohort 10"
            className="imageQuoteUnder-Image"
            src="https://images.squarespace-cdn.com/content/v1/59bff878e9bfdf14c20dc183/1556560824247-143M87NW5QHYRLRYKP0F/ke17ZwdGBToddI8pDm48kIBRiB-T2Vc-DvDeDlWcrz17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ktJPZ5nzlpAQ9l-HYKRq6VcITiSGeIF8vSWMvDhw4XET7jN3tI3NiCRnnR0FqlwgA/Cohort%2B10%2BGroup.jpg?format=1500w"
          />
          <div className="test">
            <p className="imageQuoteUnder-overlayText">Program Overview</p>
          </div>
        </div>
      </div>
      <div className="imageQuoteUnder-quoteDiv">
        <p className="imageQuoteUnder-quoteText">
          “I finally feel confident and know that there’s much more success in
          my future. The program has changed my life completely and has
          unleashed the powerful woman that I am today. ”
        </p>
        <p className='imageQuoteUnder-quoteAuthor'>
        — HANNAH DALLA RIVA | SALES '18
        </p>
      </div>
    </div>
  );
};

export default ImageQuoteUnder;
