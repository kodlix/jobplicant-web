import React from 'react'
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";

import '../videoChat.css';



const VideoCallFooter = ({ mute, stopVideo }) => {
    return (
        <div className='d-flex justify-content-around app-color bg-secondary py-2 vc-footer'>

            <div className='text-center finger'>
                <div>
                    <BsFillMicMuteFill size="30px" />
                </div>
                <div>
                    <small>Unmute Mic</small> :
                </div>

            </div>
            <div className='text-center finger'>
                <div>
                    <BsFillTelephoneFill size="30px" />
                </div>
                <div>
                    <small>End Call</small>
                </div>
            </div>
            <div>
                <div className='text-center finger'>
                    <BsFillCameraVideoOffFill size="30px" />
                </div>
                <div>
                    {stopVideo ? <small>Mute Video</small>
                        : <small>Unmute Video</small>}
                </div>
            </div>

        </div>
    )
}

export default VideoCallFooter