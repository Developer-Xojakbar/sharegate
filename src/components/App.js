import React from 'react';
import Header from './Header';
import MicrosoftCloud from './MicrosoftCloud';
import Sections from './Sections';
import Tools from './Tools';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <MicrosoftCloud />
            <Sections />
            <Tools />
        </React.Fragment>
    );
};

export default App;