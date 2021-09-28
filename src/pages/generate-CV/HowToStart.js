import React, { useRef } from 'react';
import { Button } from 'primereact/button';

import './cv.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCV } from 'store/modules/cv';

import { Card } from 'primereact/card';
import { DUMMY_TEMPLATES } from './dummy-template';


const HowToStart = () => {
    const dispatch = useDispatch()
    const ref = useRef(null);
    const cvData = useSelector(state => state.cv.data)
    const profileInfo = useSelector((state) => state.account.profileInfo);

    React.useEffect(() => {
        if (profileInfo) {
            const id = profileInfo.id;
            dispatch(fetchCV(id))
        }
    }, [profileInfo])

    React.useEffect(() => {
        if (cvData) {
            console.log('cv data', cvData)
        }
    }, [cvData])

    const getTemplateImg = (templateId) => {
        //templateId is the designated title of the template
        const dummy = DUMMY_TEMPLATES[templateId]
        console.log('dummy', dummy)
        const dummyImage = dummy.image
        return <img src={dummyImage} style="width: 100%" />
    }

    const isCvEmpty = (data) => Object.keys(data).length === 0 && data.constructor === Object

    return (
        <div className="d-flex p-jc-center">
            <div className="generate-cv" >
                <div className="mt-5">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="card card-size-list">
                                <div className="card-body">
                                    {
                                        !isCvEmpty(cvData) && (<>
                                            <h4 className="mb-2">Recent CV</h4>
                                            <div className="card p-2">
                                                <div className="w-100">
                                                    <h4>{cvData.title}</h4>
                                                    <p>{cvData.description}</p>
                                                    <div className="p-d-flex justify-content-start">
                                                        <a className="btn btn-primary" href={cvData.url}>View PDF</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="p-pt-3">
                                                <Link to={"/cv-template"}>
                                                    <Button
                                                        label="Create New"
                                                        className="p-button "
                                                    />
                                                </Link>
                                            </div>
                                        </>)
                                    }
                                    {isCvEmpty(cvData) && (<>
                                        <div className="text-center p-p-0">
                                            <h4 className="cv-header">How do you want to start?</h4>
                                        </div>
                                        <div className="p-grid p-pt-5" >
                                            <div className="p-col-12 p-md-12">
                                                <div className="text-center">

                                                    <div ><i className="pi pi-book" style={{ 'fontSize': '4em' }}></i> </div>
                                                    <h5 className="font-weight-bold p-pt-3"> Create New Resume</h5>
                                                    <p className="p-pt-2 font-weight-bold">Create a new CV from your profile</p>
                                                    <div className="p-pt-3">
                                                        <Link to={"/cv-template"}>
                                                            <Button
                                                                label="START FRESH"
                                                                className="p-button "
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HowToStart;

