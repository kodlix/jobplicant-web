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

const PreviewCV = ({ selected, selectedTemplate,setShowPreview, handleSelected }) => {
    const [editMode, setEditMode] = useState(true)
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const loading = useSelector(state => state.account.loading);

    useEffect(() => {
       dispatch(loadProfileInfo())
    }, []);

        return (
            <div>
                <div className="generate-cv" >
                    <div className="content-container">
                        <div className="p-grid">
                            <div className="p-col-2">
                                <div className="cv-header">
                                    <h4>Select a CV Template</h4>
                                </div>
                                <div className="p-grid mt-1" style={{ height: '75vh', overflow: 'auto' }}>
                                    {DUMMY_TEMPLATES.map((template, index) => (
                                        <div className="p-col-12">
                                            <CvCard 
                                                key={index} 
                                                onSelected={handleSelected} 
                                                template={template} 
                                                selected={selected} 
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="bottom-container mt-2">
                                    {!editMode && <Button disabled={selected === -1} label="Download Template" />}
                                </div>
    
                            </div>
                            <div className="p-col-8 preview-pane" style={{position: 'relative'}}>
                               <header className="header" >
                                  
                                   <i className="pi pi-arrow-left" onClick={() => setShowPreview(false)}></i>
                                   {editMode ? <i className="pi pi-times" onClick={() => setEditMode(false)}></i> : <i className="pi pi-pencil" onClick={() => setEditMode(true)}></i>}
                                   
                               </header>
                               <section>
                                   <div className="card cv-preview-box">
                                       <div className="card-body">
                                           {loading ? <Spinner /> : <TemplateOne editMode={editMode} setEditMode={setEditMode} profileInfo={profileInfo} />}
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