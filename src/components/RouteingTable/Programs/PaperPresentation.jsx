import React from 'react';
import PageBanner from '../PageBanner';
import {Link} from "react-router-dom";
import ImpDates from '../Home/ImpDates';


function PaperPresentation() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Paper Presentations" head="Programs" subhead="Paper Presentations" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}
            
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <h3 className="classic-title"><span>Paper Presentations Instructions</span></h3>
                            
                            <p style={{ whiteSpace: 'pre-line' }}>
                                <b>Category A.</b> Last date for research paper submission on “Easychair” is 28th February 2022 for its possible
                                consideration for publication. Refer to following instructions.
                                <ol className="icons-list" >
                                    <li>First review based on (Turnitin) plagiarism check, if any above 15%, will be communicated by 2nd March 2022 to enable the paper authors to revisit their write-up and confirm at their end to reduce the level of plagiarism below 15% and resubmit the modified paper along with (Turnitin) plagiarism report before 5th March 2022.</li>
                                    <li>While submitting your paper please submit a blind paper with Paper Title only, without author names to have the blind reviews. Camera ready paper will have author names.</li>
                                    <li>Technical experts’reviews will be communicated to the authors by 31st March 2022.</li>
                                    <li>Registration, Camera ready paper and copy right declaration by the authors is to be submitted by 15th April2022.</li>
                                    <li>The authors ofthe camera ready paper will orally presentthepaper at the symposium.</li>
                                </ol>
                            </p>
                            <h3 className="classic-title"><span>Template</span></h3>
                            <p><a href="/asset/Template for Poster Presenatation.pptx" target='_blank'> Template for poster presentation</a></p>
                            
                        </div>
                         {/* Related Links - start */}
                        {/* Related Links - end */}
                        <div className="col-md-3 sidebar right-sidebar">
                         
                            <div className="widget widget-categories">
                                <h4>Related Links <span className="head-line"></span></h4>
                                <ul>

                                    <li>
                                        <Link to="Keynotes">Keynotes & Award Presentation</Link>
                                    </li>


                                    <li>
                                        <Link to="Poster-Presentation">Poster Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="IPS">Innovative Project Showcase</Link>
                                    </li>
                                    <li>
                                        <Link to="Schedule">Event Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="Register">Registration</Link>
                                    </li>


                                </ul>
                            </div>
                            <ImpDates />
                        </div>
                    </div>
                </div>
                </div>

            </div>
            );
}

            export default PaperPresentation;
