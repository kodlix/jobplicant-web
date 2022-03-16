import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { on } from 'superagent';


const socket = io.connect("");


const videoChatt = () => {
    const [me, setMe] = useState();
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [callerId, setCallerId] = useState();
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");

    const myvideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();


    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audion: true, }).then((stream) => {
            setStream(stream)
            myvideo.current.scrObject = stream;
            socket.on('me', (id) => {
                setMe(id)
            })

            socket.io('callUser', (data) => {
                setReceivingCall(true);
                setCallerId(data.from)
                setName(data.name);
                setCallerSignal(data.signal);

            })
        })

    }, [])
    // initiate video call
    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            tricate: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("calluser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })

        peer.on("streem", (stream) => {
            userVideo.current.scrObject = stream;
        })

        socket.on("allAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        })

        connectionRef.current()
    }
    // Accept an initiated call
    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            tricate: false,
            stream: stream
        })

        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: callerId })
        })

        peer.on("stream", (stream) => {
            userVideo.current.scrObject = stream;
        })

        peer.signal(callerSignal)
        connectionRef.current = peer;
    }

    //Ability to leave the call
    const endCall = () => {
        setCallEnded(true)
        connectionRef.current.distroy();


    }

    return (
        <>
            <div className='d-flex'>
                <div>
                    {stream && <video playsInline muted ref={myvideo} autoPlay style={{ width: "50px" }} />}
                </div>

                <div>
                    {callAccepted && !callEnded ? <video playsInline muted ref={userVideo} autoPlay style={{ width: "50px" }} />
                        : null
                    }
                </div>
            </div>
            <div className='d-flex'>
                {receivingCall && !callAccepted ? (
                    <div><h1>{name} is calling ...</h1>
                        <Button icon="" title="Answer" onClick={answerCall()} className="bg-success" style={{ backgroundColor: "red" }} />
                    </div>
                ) : null}
            </div>
            {callAccepted && <div className='d-flex'>
                <Button icon="" onClick={endCall()} className="bg-danger" />
                <Button icon="" onClick={endCall()} className="bg-danger" />
            </div>}

        </>
    )
}

export default videoChatt