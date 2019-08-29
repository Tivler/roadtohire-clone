import React from 'react';
import '../App.css';

import ImageHero from '../components/feature/ImageHero/ImageHero';

class CoreValues extends React.Component {
    render () {
        return (
        <>
            <div className="filler">
                Core Values
            </div>
            <ImageHero 
                url="https://images.squarespace-cdn.com/content/v1/59bff878e9bfdf14c20dc183/1556560517683-XK63PRDU2FQNJLB8Z6UD/ke17ZwdGBToddI8pDm48kIBRiB-T2Vc-DvDeDlWcrz17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ktJPZ5nzlpAQ9l-HYKRq6VcITiSGeIF8vSWMvDhw4XET7jN3tI3NiCRnnR0FqlwgA/DSC_8896.jpg?format=1500w"
                title="Core Values"
            />
        </>
    )
    }
}
export default CoreValues;