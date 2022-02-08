import React from 'react';
import PageBanner from '../PageBanner';
import {
    Link
  } from "react-router-dom";

function IPS()
{
    return (
        <div>
            <PageBanner name="Innovative Project Showcase" head="Programs" subhead="IPS" info="Feel Free To Get In Touch" />
            <div className="contenti">
                <div className="container">
                   <div class="project-page row">

                        <div className="col-md-9"> 
                            <h2 className="classic-title"><span>Innovative Project Showcase Presentations</span></h2>
                            <ol>
                                <li><b>On 22rd April 2022</b></li>
                                <li><b>Prize worth Rs. 30000</b>(for top 3 winners)</li>
                                <li>Registration Fees : Rs. 500</li>
                            </ol>
                            <h3 className="classic-title"><span>Innovative Project Showcase Presentations Instructions</span></h3>
                            
                            <p style={{ whiteSpace: 'pre-line' }}>
                                <b>Category C.</b> UG students in a group not exceeding four students in the group can submit their four page project paper work to <a href='https://www.rsc.wce.ac.in/#/'>www.rsc.wce.ac.in</a> by 31st March 2022. Students in this category will note the following.
                                <ol className="icons-list" >
                                    <li>These students willsubmit their work through their respective Guide /HoD.</li>
                                    
                                    <li>The authors in this category will confirm its plagiarism check at their end for the plagiarism level less than 30%. Paperwriteup,as per Springer format,not exceeding 4pages should have contents as
                                        <ul>
                                            <li><i className="fa fa-circle"></i> Title of the paper with affiliation and email details of the authors</li>
                                            <li><i className="fa fa-circle"></i> Abstract (not exceeding 100words)</li>
                                            <li><i className="fa fa-circle"></i> Introduction</li>
                                            <li><i className="fa fa-circle"></i> Literature review with citation of maximum four references as per Springer format</li>
                                            <li><i className="fa fa-circle"></i> Objective / Statement of problem andtypicalproposal of solution</li>
                                            <li><i className="fa fa-circle"></i> Results and discussions and</li>
                                            <li><i className="fa fa-circle"></i> References</li>
                                        </ul>
                                    </li>
                                    <li>The shortlisted projects for inclusion into RSC 2022 will be communicated to the respective authors (with corrections if any) latest by 15th April 2022. These projects will be showcased in a competitive way during pre-symposium event titled as “Innovative Project Showcasing 2022” on 22nd April 2022. The first, second and the third best projects will receive cash prize of Rs 12,000/-, Rs 10,000/- and Rs 8,000/- respectively.</li>
                                    <li>Registration fee of Rs 500/- per project group (of 4 students maximum) is compulsory for the event on 22nd April 2022. The registration fee isinclusive of all taxes anditincludesbreakfast (if event is conducted in Offline mode) andentrypass for all the keynote expert sessions on the day only. The mode of payment of registration fee will be communicated to the shortlisted project group members by email and also will be available on RSC website.</li>
                                    <li>The registration isto be completed along with submission of corrected project paper, if any, by 20th April 2022.</li>
                                    <li>Selected project groupstudents ofWCEmay be considered forregistration fee waiver.</li>    
                                    <li>Selected project papers abstract will be considered for inclusion in the e-proceeding of the symposium which bears ISBN number.</li>
                                   

                                </ol>
                            </p>
                        </div>
                            
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4>Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Keynotes">Keynotes & Award Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="Paper-Presentation">Paper Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="Poster-Presentation">Poster Presentation</Link>
                                    </li>     
                                    <li>
                                        <Link to="Schedule">Event Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to="Register">Registration</Link>
                                    </li>
                                </ul>
                            </div>
                            <table className="table table-responsive table-condensed table-bordered" style={{margin:"0px"}}>
                                    <thead>
                                        <th>Submission deadline</th>
                                    </thead>
                                    <tbody>
                                    <td>31th March 2022</td>
                                    </tbody>
                                    <thead>
                                        <th>Notification of acceptance</th>
                                    </thead>
                                    <tbody>
                                    <td>15st March 2022</td>
                                    </tbody>
                                    <thead>
                                        <th>Registration deadline</th>
                                    </thead>
                                    <tbody>
                                    <td>20th April 2022</td>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                </div>

        </div>
    );
}

export default IPS;