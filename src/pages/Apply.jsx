import React from 'react';
import '../App.css';

import ImageHero from '../components/feature/ImageHero/ImageHero';

class Apply extends React.Component {
    render () {
        return (
        <>
            <div className="filler">
                Apply
            </div>
            <ImageHero 
                url="https://images.squarespace-cdn.com/content/v1/59bff878e9bfdf14c20dc183/1557426321089-3JYFAA6MVGD0HZAPNNLQ/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/HalfTimeSlide.jpg?format=1500w"
                title="Applications Open"
            />
        </>
    )
    }
}
export default Apply;