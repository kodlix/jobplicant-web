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
import { PDFDownloadLink, renderToFile, usePDF } from "@react-pdf/renderer";

const PreviewCV = ({ selected, selectedTemplate, setShowPreview, handleSelected }) => {
    const [editMode, setEditMode] = useState(true)
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const loading = useSelector(state => state.account.loading);

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
                        <div className="p-col-12 p-md-9 p-lg-9 preview-pane" style={{ position: 'relative' }}>
                            <header className="header" >
                                <i className="pi pi-arrow-left" onClick={() => setShowPreview(false)}></i>

                                {editMode ? <i className="pi pi-times" onClick={() => setEditMode(false)}></i> : <i className="pi pi-pencil" onClick={() => setEditMode(true)}></i>}
                            </header>
                            <section>
                                <div className="card cv-preview-box">
                                    <div className="card-body">
                                        {/* <PDFDownloadLink document={<TemplatePDFOne />} fileName="somename.pdf">
                                            {({ blob, url, loading, error }) =>
                                                loading ? 'Loading document...' : 'Download now!'
                                            }
                                        </PDFDownloadLink> */}
                                        {/* {instance.error && <p>Something went wrong.</p>}
                                        {instance.loading ? <p>loading</p> : <a href={instance.url} download="test-template.pdf">Download PDF</a>} */}
                                        {loading
                                            ? <Spinner />
                                            : <TemplatePDFOne
                                                editMode={editMode}
                                                setEditMode={setEditMode}
                                                profileInfo={profileInfo}
                                            />}
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