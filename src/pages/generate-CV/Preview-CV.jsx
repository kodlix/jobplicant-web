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

    return (
        <div>
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
                                    {/* <header className="header" >
                                <i className="pi pi-arrow-left" onClick={() => setShowPreview(false)}></i>

                                {editMode ? <i className="pi pi-times" onClick={() => setEditMode(false)}></i> : <i className="pi pi-pencil" onClick={() => setEditMode(true)}></i>}
                            </header> */}

                                    <section>
                                        {/* <p>Adding to profile {addingToProfile.toString()}</p> */}
                                        <div className="cv-preview-box">

                                            <div className="d-flex justify-content-center">
                                                {getTemplate(selected) !== null && <PDFDownloadLink
                                                    document={getTemplate(selected)}
                                                    fileName={`template-${selected}.pdf`}
                                                    style={{
                                                        textDecoration: "none",
                                                        padding: "10px",
                                                        color: "white",
                                                        backgroundColor: 'var(--primary-color)',
                                                        borderRadius: '4px',
                                                        width: "50%",
                                                        margin: "20px ",
                                                        display: "block"
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
                                                    style={{
                                                        textDecoration: "none",
                                                        padding: "10px",
                                                        color: "white",
                                                        backgroundColor: 'var(--primary-color)',
                                                        borderRadius: '4px',
                                                        width: "50%",
                                                        margin: "20px ",
                                                        display: "block"
                                                    }}
                                                />
                                            </div>

                                            {<div>
                                                <div className="d-sm-block d-md-none">
                                                    <h5>PDF not supported on mobile view, please view on desktop.</h5>
                                                </div>
                                                <PDFViewer className="col-12 d-sm-none d-md-block" height="740px">
                                                    {
                                                        getTemplate(selected)

                                                    }
                                                </PDFViewer>
                                            </div>

                                            }

                                        </div>
                                    </section>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )

}

export default PreviewCV