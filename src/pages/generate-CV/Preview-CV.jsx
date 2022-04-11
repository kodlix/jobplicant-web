import CvCard from "./CV-Card"
import { Button } from 'primereact/button';
import { DUMMY_TEMPLATES } from "./dummy-template";

import template1 from '../../assets/images/cv-templates/template~1.png';

import "./Preview-CV.css";
import TemplateOne from "./designs/template-one/TemplateOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadProfileInfo } from "store/modules/account";
import Spinner from "components/spinner/spinner.component";
import TemplatePDFOne from "./pdf/templates/TemplatePDFOne";
import { PDFDownloadLink, PDFViewer, renderToFile, pdf } from "@react-pdf/renderer";
import TemplatePDFTwo from "./pdf/template_2/TemplatePDFTwo";
import TemplatePDFThree from "./pdf/template_3/TemplatePDFThree";
import TemplatePDFFour from "./pdf/template_4/TemplatePDFFour";
import { Link } from "react-router-dom";
import { createCV } from "store/modules/cv";

const PreviewCV = ({ selected, selectedTemplate, setShowPreview, handleSelected }) => {
    const [editMode, setEditMode] = useState(true)
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const loading = useSelector(state => state.account.loading);
    const [loaded, setLoaded] = useState(false);
    const submitting = useSelector(state => state.cv.submitting);

    useEffect(() => {
        dispatch(loadProfileInfo())

    }, []);

    // const [instance, updateInstance] = usePDF({ document: getTemplate(selected) });

    const handleDownloadPDF = async () => {
        console.log('handle download pdf');

    }

    const handleSaveCv = async () => {
        const blob = await pdf(getTemplate(selected)).toBlob();
        console.log(blob)
        var formdata = new FormData();
        formdata.append('title', `template-${selected}`)
        formdata.append('description', `description ${selected}`)
        // formdata.append('file', new Blob([blob], {type: 'application/json'}))
        formdata.append('file', new File([blob], `template-${selected}.pdf`, { type: "application/pdf" }))

        console.log(formdata)
        dispatch(createCV(formdata))
    }

    const navigateBack = () => {
        setShowPreview(false);
    }

    const getTemplate = (id) => {
        switch (id) {
            case 1:
                return <TemplatePDFOne profileInfo={profileInfo} />
            case 2:
                return <TemplatePDFTwo profileInfo={profileInfo} />
            case 3:
                return <TemplatePDFThree profileInfo={profileInfo} />
            case 4:
                return <TemplatePDFFour profileInfo={profileInfo} />
            default:
                return <TemplateOne profileInfo={profileInfo} />
        }
    }

    return (<>
        <div style={{ position: 'absolute', bottom: '24px', zIndex: 100, backgroundColor: 'transparent', borderRadius: '15px', padding: '4px', width: '100%' }}>

            <div className="d-flex">
                <div className="d-flex justify-content-start">
                    <Button
                        icon="pi pi-times"
                        label="Go Back"
                        className="p-button-rounded"
                        style={{ boxShadow: '2px 3px 15px 2px #999' }}
                        onClick={navigateBack}
                    />
                    {getTemplate(selected) !== null && <PDFDownloadLink
                        document={getTemplate(selected)}
                        fileName={`template-${selected}.pdf`}
                        className="p-button p-button-rounded ml-1 mr-1"
                        style={{
                            // textDecoration: "none",
                            // padding: "10px",
                            // color: "white",
                            // backgroundColor: 'var(--primary-color)',
                            // borderRadius: '4px',
                            // width: "50%",
                            // margin: "20px ",
                            // display: "block"
                        }}
                    >
                        {({ blob, url, loading, error }) => {
                            if (url) {
                                setLoaded(true)
                            }
                            return (
                                loading ? "Loading document..." : "Download Pdf")
                        }
                        }
                    </PDFDownloadLink>}

                    <Button
                        onClick={handleSaveCv}
                        label={submitting ? "Please wait..." : "Save CV"}
                        disabled={submitting || !loaded}
                        className="p-button mr-1 ml-1"
                    // style={{
                    //     textDecoration: "none",
                    //     padding: "10px",
                    //     color: "white",
                    //     backgroundColor: 'var(--primary-color)',
                    //     borderRadius: '4px',
                    //     width: "50%",
                    //     margin: "20px ",
                    //     display: "block"
                    // }}
                    />

                    {editMode ? <Button label="Edit CV"
                        className="p-button-rounded p-button mr-1 ml-1"
                        icon="pi pi-pencil"
                        onClick={() => setEditMode(false)}
                    />
                        : <Button 
                        label="Close Editor"
                            className="p-button-rounded p-button mr-1 ml-1"
                            icon="pi pi-times"
                            onClick={() => setEditMode(true)}
                        />}
                </div>

                {/* <div className="d-flex">
                    
                        <Button icon="pi pi-arrow-left" className="p-button-rounded p-button" onClick={() => setShowPreview(false)} />

                       
           
                </div> */}
            </div>
        </div>
        <section>
            <div className="cv-preview-box">
                {<div>
                    <div className="d-sm-block d-md-none">
                        <h5>PDF not supported on mobile view, please view on desktop.</h5>
                    </div>
                    <PDFViewer className="col-12 d-sm-none d-md-block" height="740px">
                        {
                            getTemplate(selected)

                        }
                    </PDFViewer>
                </div>}
            </div>
        </section>
        {/* <div>
            <div className="generate-cv" >
                <div className="content-container">
                    <div className="p-card">
                        <div className="p-card-header">
                            <div className="p-4">
                                <Link to="#" onClick={navigateBack} className="bk-btn p-pt-2 app-color ml-auto"><i className="pi pi-arrow-left fs-5">Back</i></Link>
                            </div>
                        </div>
                        <div className="p-card-body">
                            <div className="p-grid justify-content-center">
                                <div className="p-col-12 p-md-12 p-lg-12 preview-pane" style={{ position: 'relative' }}>
                                    <header className="header" >
                                <i className="pi pi-arrow-left" onClick={() => setShowPreview(false)}></i>

                                {editMode ? <i className="pi pi-times" onClick={() => setEditMode(false)}></i> : <i className="pi pi-pencil" onClick={() => setEditMode(true)}></i>}
                            </header> 

                                   
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div > */}
    </>)

}

export default PreviewCV