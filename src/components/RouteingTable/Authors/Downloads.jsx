import React from 'react';
import PageBanner from '../PageBanner';
import data from '../../../JSON/Programs/download.json'

function Downloads() {
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Downloads" head="Author" subhead="Downloads" info="Feel Free To Get In Touch" />
            {/* PageBanner - end */}

            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <h1 className="accent-color">Downloads</h1>
                            <br/>
                            <table className="table table-responsive table-condensed table-bordered">
                                <thead>
                                    <th>Title</th>
                                    <th>Download Link</th>
                                </thead>
                                <tbody>


                                    {data.data.map(entry => <tr key={entry.id}>

                                        <td>{entry.text}</td>

                                        <td><div className="btn-system border-btn btn-medium" ><a href={entry.link} target='_blank'> Download </a></div>
                                            </td>
                                    </tr>)

                                    }


                                </tbody>
                            </table>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Downloads;