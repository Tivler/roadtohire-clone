import React from 'react';
import '../App.css';

import AppNav from '../components/core/AppNav/AppNav';
import AppFooter from '../components/core/AppFooter/AppFooter';

import Video from '../components/layout/home/Video/index';
import Info from '../components/layout/home/Info/Info';
import Cards from '../components/layout/home/Card/Card';
import Divider from '../components/layout/home/Divider/Divider'
import Mission from '../components/layout/home/Mission/index';

class Home extends React.Component {
    render () {
        return (
        <>
            <AppNav />
            <Video />
            <Mission />
            <Info />
            <Cards />
            <Divider />
            <AppFooter />
        </>
    )
    }
}
export default Home;