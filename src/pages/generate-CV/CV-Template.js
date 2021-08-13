import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';


import './CV-Template.css';
import PreviewCV from './Preview-CV';
import CvCard from './CV-Card';
import { DUMMY_TEMPLATES } from './dummy-template';


const CvTemplateGallery = ({ selected, handleSelected, setShowPreview }) => {
    const handleShowPreview = () => {
        setShowPreview(true)
    }


    return (<div className="generate-cv" >
        <div className="content-container">
            <div className="p-grid">
                <div className="p-col-12">
                    <div className=" d-flex justify-content-between">
                        <div>
                            <h4 className="cv-header">Select a CV Template to generate from</h4>
                        </div>
                        <div>
                        <Link to="/howtostart" className="bk-btn p-pt-2 app-color"><i className="pi pi-arrow-left fs-5">Back</i></Link>
                        </div>
                    </div>

                    <div className="p-grid mt-5">
                        {DUMMY_TEMPLATES.map((template, index) => (
                            <div key={index} className="p-col-12 p-md-4">
                                <CvCard
                                    
                                    onSelected={handleSelected}
                                    template={template}
                                    selected={selected}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 mb-4">
                        <Button disabled={selected === -1} label="Generate" className="p-button float-right" onClick={handleShowPreview} />
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

    const handleSelected = (id, template) => {
        setSelected(id);
        setSelectedTemplate(template);
    }

    return (
        <div>
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

