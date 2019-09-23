import React from 'react';

import AppNav from '../components/core/AppNav/AppNav';
import AppFooter from '../components/core/AppFooter/AppFooter';
import HeroLayout from '../components/shared/HeroLayout/HeroLayout';
import Content from '../components/layout/faq/Content/Content';

const FAQ = () => {
    return (
        <>
            <AppNav />
            <HeroLayout 
                class="faq"
                title="Frequently Asked Questions" 
                quote="Have any questions? Here are some of the most common questions we recieve about our programs and what we have to offer! If you have further questions please reach out to us."
            />
            <Content />
            <AppFooter />
        </>
    )
}

export default FAQ;