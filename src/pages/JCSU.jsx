import React from 'react';

import AppNav from '../components/core/AppNav/AppNav';
import AppFooter from '../components/core/AppFooter/AppFooter';

import HeroLayout from '../components/shared/HeroLayout/HeroLayout';
import Content from '../components/layout/jcsu/Content/Content';
import Info from '../components/layout/jcsu/Info/Info';

const JCSU = () => {
    return (
        <>
            <AppNav />
            <HeroLayout 
                class="jcsu"
                title="Johnson C. Smith University" 
                quote='"Digital Marketers move people through the buying cycle from awareness and consideration to purchase and loyalty. Because there is such high demand in this role, studying digital marketing will give you a unique competitive advantage."'
            />
            <Info />
            <Content />
            <AppFooter />
        </>
    )
}

export default JCSU;