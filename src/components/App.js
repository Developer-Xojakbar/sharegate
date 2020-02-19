import React from 'react';
import Header from './Header';
import MicrosoftCloud from './MicrosoftCloud';
import Sections from './Sections';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <MicrosoftCloud />
            <Sections />
        </React.Fragment>
    );
};

export default App;