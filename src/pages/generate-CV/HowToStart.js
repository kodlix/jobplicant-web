import React, { useRef } from 'react';
import { Button } from 'primereact/button';

import './cv.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCV } from 'store/modules/cv';



const HowToStart = () => {
    const dispatch = useDispatch()
    const ref = useRef(null);
    const cvData = useSelector(state => state.cv.data)
    const profileInfo = useSelector((state) => state.account.profileInfo);

    React.useEffect(() => {
        if(profileInfo){
            const id = profileInfo.id;
        dispatch(fetchCV(id))
        }
    }, [profileInfo])

    React.useEffect(() => {
        if(cvData){
            console.log('cv data', cvData)
        }
    }, [cvData])

    return (
        <div className="d-flex p-jc-center">
            <div className="generate-cv" >
                <div className="mt-5">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="card card-size-list">
                                <div className="card-body">
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
                                        {/* <div className="vl d-none "></div>
                                        <div className="p-col-12 p-md-6 pl-md-2">
                                            <div className="text-center">
                                                <div ><i className="pi pi-upload text-info" style={{ 'fontSize': '4em' }}></i> </div>
                                                <h5 className="font-weight-bold p-pt-3"> I already have a Resume</h5>
                                                <p className="p-pt-2 font-weight-bold">Upload existing CV</p>
                                                <div className="p-pt-3">
                                                    <input type="file" className="d-none" ref={ref} />
                                                    <Button label="UPLOAD RESUME" className="upload-btn" onClick={() => ref.current.click()} />
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
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

