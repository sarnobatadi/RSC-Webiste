import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import {
    Link
} from "react-router-dom";
import peperSubmission from '../../../JSON/Authors/paperSubmission.json'

function Submission() {

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setAllData(peperSubmission);
        if(allData.maintenanceBreakState){
            setToShow(false);
        }else{
            setToShow(true);
        }
        setIsLoading(false)
        
    }, [allData])
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Paper Submission" head="Author" subhead="Paper Submission" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
           
            <div className="contenti">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-9">  
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                        <div>                                   
                                            <h3 className="classic-title" id="notifications"><span>Paper Submission</span></h3>
                                            <p>{allData.data.paragraph}</p>
                                            <br/>
                                            <img src="/images/Sub.jpg" alt="Submission"/>
                                        </div>
                                    
                                    
                                        <div className="call-action call-action-boxed call-action-style3 clearfix" style={{margin:"10px"}}>
                                        
                                            <div className="button-side" style={{"margin-top":"10px"}}> <a target="_blank" href={`${allData.data.submissionLink}`} className="btn-system border-btn btn-medium">Click here</a></div>
                                        
                                            <h2 className="primary"><strong>Submisson</strong></h2>
                                            <p>for submission of papers, RSC 2022</p>
                                        </div>    
                                    </>
                                )
                            }
                        </div>
                        {/* Related Links - start */}
                        <div className="col-md-3 sidebar right-sidebar"> 
                            <div className="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Call-for-contribution">Call for Contributions</Link>
                                    </li>
                                    <li>
                                        <Link to="Guidlines">Submission Guidlines</Link>
                                    </li>
                                    <li>
                                        <Link to="Important-Dates">Important Dates</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Related Links - end */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Submission;
