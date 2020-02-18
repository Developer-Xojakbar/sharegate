import React, { useState , useEffect } from 'react';
import Header from './Header';

const App = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            setScroll(value);
        });
    },[])

    return (
        <React.Fragment>
            <Header scroll={scroll} />
        </React.Fragment>
    );
};

export default App;