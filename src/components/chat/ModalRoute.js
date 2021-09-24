import React from 'react'

export default () => {
    const back = () => {
        console.log('back')
    }
    return (
        <div
          onClick={back}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.15)"
          }}
        >
          <div
            className="modal"
            style={{
              position: "absolute",
              background: "#fff",
              top: 25,
              left: "10%",
              right: "10%",
              padding: 15,
              border: "2px solid #444"
            }}
          >
            <h1>Modal title</h1>
            <div style={{width: '400px',height: '400px', backgroundColor: 'green'}}></div>
            <button type="button" onClick={back}>
              Close
            </button>
          </div>
        </div>
      );
}