import React, { useEffect, useState } from 'react';
import PageBanner from '../PageBanner';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import posterPresentation from "../../../JSON/Programs/posterPresentation.json"


function PosterPresentation() {

    const [allData, setAllData] = useState([]);
    const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
    const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
    const [toShow, setToShow] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [sizeLayout, setSizeLayout] = useState();
    const [orgIdea, setOrgIdea] = useState();
    const [format, setFormat] = useState();
    const [presentation, setPresentation] = useState();
    const [displayNotice, setDisplayNotice] = useState(false);
    const [displayeNoticeHead, setDisplayeNoticeHead] = useState('');
    const [displayeNoticeContent, setDisplayeNoticeContent] = useState('')
    const [maintenanceBreak, setMaintenanceBreak] = useState(false);
    const [maintenanceBreakHead, setMaintenanceBreakHead] = useState('');
    const [maintenanceBreakContent, setMaintenanceBreakContent] = useState('');
    const [finalData, setFinalData] = useState(null);
    const [finalMessage, setFinalMessage] = useState("");


    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "get/posterPresentation"
            ).then((response) => {
                if (response.data[0]) {
                    setAllData(response.data[0]);
                } else {
                    setMaintenanceBreak(true);
                    setMaintenanceBreakHead("Problem in Fetching data")
                    setMaintenanceBreakContent("Please Contact admin for details")
                }
            }).catch((e) => {
                /* HANDLE THE ERROR (e) */
                console.log(e);
                setMaintenanceBreak(true);
                setMaintenanceBreakHead("Problem in Fetching data")
                setMaintenanceBreakContent("Please Contact admin for details")
            });
            setIsLoading(false);
        };
        getData();
        setIsLoading(false);
    }, [])


    useEffect(() => {
        if (!isLoading) {
            if (allData.maintenanceBreakStatus) {
                setToShow(false);
                setMaintenanceBreak(allData.maintenanceBreakStatus)
                setMaintenanceBreakHead(allData.maintenanceBreakHeading)
                setMaintenanceBreakContent(allData.maintenanceBreakContent)
            } else {
                setToShow(true);
                if (allData.displayNoticeStatus) {
                    setDisplayNotice(allData.displayNoticeStatus)
                    setDisplayeNoticeHead(allData.displayNoticeHeading)
                    setDisplayeNoticeContent(allData.displayNoticeContent)
                }
                if (allData.data) {
                    setSizeLayout(allData.data.sizeAndLayout)
                    setOrgIdea(allData.data.organisationOfIdeas)
                    setFormat(allData.data.format)
                    setPresentation(allData.data.presentation)
                }
            }
        }

    }, [allData])


    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Poster Presentations" head="Programs" subhead="Poster Presentations" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Main Content - start */}
                        <div className="col-md-9" style={{ textAlign: "justify" }}>
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                        {
                                            toShow ? (
                                                <React.Fragment>
                                                    {
                                                        displayNotice ? (
                                                            <displayNotice heading={displayeNoticeHead} message={displayeNoticeContent} />
                                                        ) : null
                                                    }

                                                    <h3 className="classic-title"><span>Poster Presentations Instructions</span></h3>
                            
                                                    <p style={{ whiteSpace: 'pre-line' }}>
                                                        <b>Category B.</b> M Tech CSE / IT/Electronics students can submit their research / dissertation / Review papers latest by 11th March 2022 in this category. Refer to following instructions.
                                                        <ol className="icons-list" >
                                                            <li>The authors in this category will confirm its plagiarism check at their end for the plagiarism level less than 20%. Paper write up, as perspringer format, not exceeding 4 pages should have contents as
                                                                <ul>
                                                                    <li><i className="fa fa-circle"></i> Title of the paper with affiliation and email details of the authors</li>
                                                                    <li><i className="fa fa-circle"></i> Abstract (not exceeding 100words)</li>
                                                                    <li><i className="fa fa-circle"></i> Introduction</li>
                                                                    <li><i className="fa fa-circle"></i> Literature review with citation of maximum four references as per format given on website</li>
                                                                    <li><i className="fa fa-circle"></i> Objective / Statement of problem andtypicalproposal ofsolution</li>
                                                                    <li><i className="fa fa-circle"></i> Results and discussions and</li>
                                                                    <li><i className="fa fa-circle"></i> Conclusion (if Any)</li>
                                                                    <li><i className="fa fa-circle"></i> References.</li>
                                                                </ul>
                                                            </li>
                                                            <li>The paper should be submitted through the easychair link provided at <a href='https://www.rsc.wce.ac.in/#/'>www.rsc.wce.ac.in</a>.</li>
                                                            <li>The shortlisted papers for inclusion into RSC 2022 will be communicated to the respective authors latest by 31st March 2022.</li>
                                                            <li>Camera ready paper, Registration along with the (Turnitin) plagiarism check report is to be separately submitted by the authors to <a href='https://www.rsc.wce.ac.in/#/'>www.rsc.wce.ac.in</a> through the Guide / HoD of their department by 7th April 2022.</li>
                                                            <li>Selected papers in this category will be considered for its poster presentation and subsequently may published in the e-proceeding of the symposium which bears ISBN.

                                                            </li>

                                                        </ol>
                                                    </p>

                                                    <h3 className="classic-title"><span>Size & Layout</span></h3>
                                                    {
                                                        sizeLayout && <p style={{ whiteSpace: 'pre-line' }}>{sizeLayout}</p>
                                                    }
                                                    <img src="/images/poster.png" alt="Poster" style={{ margin: "10px" }} />


                                                    <h3 className="classic-title"><span>Organization of Ideas</span></h3>
                                                    {
                                                        orgIdea && <p style={{ whiteSpace: 'pre-line' }}>{orgIdea}</p>
                                                    }

                                                    <h3 className="classic-title"><span>Format</span></h3>
                                                    {
                                                        format && <p style={{ whiteSpace: 'pre-line' }}>{format}</p>
                                                    }
                                                    <h3 className="classic-title"><span>Presentation</span></h3>
                                                    {
                                                       presentation && <p style={{ whiteSpace: 'pre-line' }}>{presentation}</p>
                                                    }
                                                </React.Fragment>
                                            ) : (
                                                <maintenanceBreak heaading={maintenanceBreakHead} message={maintenanceBreakContent} />
                                            )
                                        }
                            
                                    </>
                                )
                            }
                        </div>
                        {/* Main Content - end */}

                        {/* Related Links - Start */}
                        <div className="col-md-3 sidebar right-sidebar">
                            <div className="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="Keynotes">Keynotes & Award Presentation</Link>
                                    </li>
                                    <li>
                                        <Link to="Paper-Presentation">Paper Presentation</Link>
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
                        </div>
                        {/* Related Links - end */}


                    </div>
                </div>
            </div>
        </div >
    );
}

export default PosterPresentation;
