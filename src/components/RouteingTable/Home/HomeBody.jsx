import React from 'react';
import Notifications from './Notifications';
import data from '../../../JSON/Home/HomeBody.json';

function HomeBody() {
    return (
        <>
            <div className="col-md-8" >

                <h1 className="accent-color">{data.data.title} </h1>
               
                <strong>{data.data.subtitle}</strong>
                 <br /> 
                <h4><b>{data.data.subhead}</b></h4>
                <br />
                <p>{data.data.info.para1}
                </p><br />
                <p>{data.data.info.para2}
                    </p>
                <br />
                <p> {data.data.info.para3}</p><br />

                <Notifications/>
            
            </div>
        </>
    );
}

export default HomeBody;
