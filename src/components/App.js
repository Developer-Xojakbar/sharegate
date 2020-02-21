import React from 'react';
import Header from './Header';
import MicrosoftCloud from './MicrosoftCloud';
import Sections from './Sections';
import Tools from './Tools';
import Support from './Support';
import Banner from './Banner';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <MicrosoftCloud />
            <Sections />
            <Tools />
            <Support />
            <Banner />
            <Footer />
        </React.Fragment>
    );
};

export default App;