import { Button } from 'primereact/button';
import React from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom';


import './CV-Template.css';
import PreviewCV from './Preview-CV';
import CvCard from './CV-Card';
import { DUMMY_TEMPLATES } from './dummy-template';


const CvTemplateGallery = ({ selected, handleSelected, setShowPreview }) => {
    const match = useRouteMatch();
    const history = useHistory();

    const handleShowPreview = () => {
        setShowPreview(true)
        // history.push(`${match.url}/template-${selected}`)
    }

    console.log(`selected: ${selected}`)
    return (<div className="generate-cv" >
        <div className="content-container">
            <div className="p-grid">
                <div className="p-col-12">

                    <div className="p-card">
                        <div className="p-card-header">
                            <div className="p-d-flex p-flex-column p-flex-md-row p-3">
                                <div>
                                    <Link to="/howtostart" className="bk-btn p-pt-2 app-color mr-sm-4" style={{ width: 'inherit' }}><i className="pi pi-arrow-left fs-5">Back</i></Link>
                                </div>
                                <h4 className="cv-header py-3 py-md-0">Select a CV Template to generate from</h4>

                                <Button disabled={selected === -1} label="Generate" className="p-button ml-md-auto mr-2 p-as-md-start" onClick={handleShowPreview} />
                            </div>
                            {/* <div className="mt-2 mb-4 ml-auto">
                            </div> */}
                        </div>
                        <div className="p-card-body">

                            <div className="p-grid">
                                {DUMMY_TEMPLATES.map((template, index) => (
                                    <div key={index} className="p-col-12 p-md-4">
                                        <CvCard
                                            onSelected={handleSelected}
                                            template={template}
                                            selected={selected}
                                            url={`${match.url}/${template.url}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}


const CVTEMPLATE = () => {
    const [selected, setSelected] = React.useState(-1)
    const [selectedTemplate, setSelectedTemplate] = React.useState(null);
    const [showPreview, setShowPreview] = React.useState(false)

    const match = useRouteMatch();

    const handleSelected = (id, template) => {
        setSelected(id);
        setSelectedTemplate(template);
    }


    // return (
    //     <div className='container'>
    //         <Link to={`${match.url}/template-1`}>Template 1</Link>
    //         <Link to={`${match.url}/template-2`}>Template 2</Link>

    //         <div className="component">
    //             <Route exact path={`${match.path}/`} render={(props) => <TemplateOne {...props} />} />
    //             <Route path={`${match.path}/:templateId`} render={(props) => <TemplateTwo {...props}  />} />
    //         </div>
    //     </div>
    // )

    return (
        <div>
            {/* <Route exact path={`${match.path}/`} render={props => <CvTemplateGallery {...props}
                selected={selected}
                handleSelected={handleSelected}
                setShowPreview={setShowPreview}
            />}
            />
            <Route path={`${match.path}/:templateId`} render={props => <PreviewCV {...props}
                selected={selected}
                handleSelected={handleSelected}
                setShowPreview={setShowPreview}
                selectedTemplate={selectedTemplate}
            />}
            /> */}
            {!showPreview && <CvTemplateGallery
                selected={selected}
                handleSelected={handleSelected}
                setShowPreview={setShowPreview}
            />}

            {showPreview && <PreviewCV
                selected={selected}
                handleSelected={handleSelected}
                setShowPreview={setShowPreview}
                selectedTemplate={selectedTemplate}
            />}
        </div >
    )
}

export default CVTEMPLATE;

