import React from 'react';
import HomeBody from './HomeBody';
import Slider from './Slider';
import CountDown from './Countdown';
import { Sidebar } from './Sidebar';

function Home() {
    
    return (
        <div>
            <div className="contenti" style={{padding:'60px 0px'}}>
                <div className="container " style={{ textAlign: 'justify' }}>
                    <Slider/>
                    <div className="page-content" style={{marginTop:"30px"}}>   
                        <HomeBody/>
                        <Sidebar/> 
                    </div>
                </div>
                {/*
                <Speakers/>
                <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                <Sponsors />
                <div className="hr5" style={{marginTop:'30px',marginBottom:'40px'}}></div>
                */}
                <CountDown/>
            </div>
         
        </div>
    );
}

export default Home;



