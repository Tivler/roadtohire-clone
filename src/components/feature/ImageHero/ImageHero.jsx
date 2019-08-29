//Dependencies
import React from "react";

//CSS
import './_ImageHero.scss';

const ImageHero = (props) => {
  return (
      <section className="hero">
        <div className="hero__container">
          <img alt="cohort 10" className="hero__image" src={props.url} />
          <div className="hero__overlay">
            <p className="hero__overlay__title">{props.title}</p>
          </div>
        </div>
      </section>
  );
};

export default ImageHero;


//  {/* <div className="imageQuoteUnder-quoteDiv">
//         <p className="imageQuoteUnder-quoteText">
//             {props.quote}
//         </p>
//         <p className='imageQuoteUnder-quoteAuthor'>
//             {props.author}
//         </p>
//       </div> */}