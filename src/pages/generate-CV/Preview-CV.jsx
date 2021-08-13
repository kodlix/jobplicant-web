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
import { PDFDownloadLink, PDFViewer, renderToFile, usePDF } from "@react-pdf/renderer";

const PreviewCV = ({ selected, selectedTemplate, setShowPreview, handleSelected }) => {
    const [editMode, setEditMode] = useState(true)
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const loading = useSelector(state => state.account.loading);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(loadProfileInfo())
    }, []);

    const [instance, updateInstance] = usePDF({ document: TemplatePDFOne });

    const handleDownloadPDF = async () => {
        console.log('handle download pdf');

    }

    return (
        <div>
            <div className="generate-cv" >
                <div className="content-container">
                    <div className="p-grid justify-content-center">
                        <div className="p-col-12 p-md-12 p-lg-12 preview-pane" style={{ position: 'relative' }}>
                            <header className="header" >
                                <i className="pi pi-arrow-left" onClick={() => setShowPreview(false)}></i>

                                {editMode ? <i className="pi pi-times" onClick={() => setEditMode(false)}></i> : <i className="pi pi-pencil" onClick={() => setEditMode(true)}></i>}
                            </header>
                            <section>
                                <div className="card cv-preview-box">
                                    <div className="card-body">
                                                <PDFDownloadLink
                                                    document={<TemplatePDFOne profileInfo={profileInfo} />}
                                                    fileName="template-one.pdf"
                                                    style={{
                                                        textDecoration: "none",
                                                        padding: "10px",
                                                        color: "#4a4a4a",
                                                        backgroundColor: "#f2f2f2",
                                                        border: "1px solid #4a4a4a",
                                                        width: "50%",
                                                        margin: "20px auto",
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
                                                </PDFDownloadLink>
                                        {loading
                                            ? <Spinner />
                                            : <div>
                                                <div className="d-sm-block d-md-none">
                                                    <h5>PDF not supported on mobile view, please view on desktop.</h5>
                                                </div>
                                                <PDFViewer className="col-12" height="740px">
                                                    <TemplatePDFOne profileInfo={profileInfo} />
                                                </PDFViewer>
                                            </div>

                                        }
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )

}

export default PreviewCV