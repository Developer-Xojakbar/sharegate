import React from 'react';
import Header from './Header';
import MsCloud from './MsCloud';
import Sections from './Sections';
import Tools from './Tools';
import Support from './Support';
import Banner from './Banner';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <MsCloud />
            <Sections />
            <Tools />
            <Support />
            <Banner />
            <Footer />
        </React.Fragment>
    );
};

export default App;