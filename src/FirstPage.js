import React from 'react';
import Header from './Header';



const FirstPage = () => {


    return (
        <div className='first-page full'>
            <Header/>
            <div className='first-page-content'>

                <div className='first-page-text'>
                        <h1>iPhone 13 Pro</h1>
                        <h2>Oh. So. Pro</h2>
                </div>
                
                <video autoPlay muted className='intro-vid' src='/images/intro-animation.mov' ></video>

            </div>
        </div>
    );
}

export default FirstPage;
