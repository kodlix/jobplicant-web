import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ToggleButton } from 'primereact/togglebutton';
import "./Timeline.css";

const CreatePostModal = ({ visible, onHide, onModalCheckChange, modalPostMode }) => {
  const ref = useRef({});
  const viewerGroups = [
    { name: 'Public', code: 'PBC' },
    { name: 'Group', code: 'GRP' }
  ];
  const [mediaArray, setMediaArray] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);
  const [selectedViewerGroup, setSelectedViewerGroup] = useState({ name: 'Public', code: 'PBC' });
  const onViewerGroupChange = (e) => {
    setSelectedViewerGroup(e.value);
  }

  const addImage = e => {
    if (e.target.files.length) {
      const preview = URL.createObjectURL(e.target.files[0]);
      const newMediaArray = [...mediaArray];
      newMediaArray.unshift({ id: "portfolio" + (mediaCount + 1), type: "image", imageURL: preview });
      setMediaArray(newMediaArray);
      setMediaCount(mediaCount + 1);
      console.log(mediaCount);
    }
  };

  const addVideo = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    const newMediaArray = [...mediaArray];
    newMediaArray.unshift({ id: "portfolio" + (mediaCount + 1), type: "video", videoURL: preview });
    setMediaArray(newMediaArray);
    setMediaCount(mediaCount + 1);
    let formData = new FormData();
    formData.append("videoFile", {
      name: e.target.files[0].name,
      uri: preview,
      type: e.target.files[0].type
    });
    formData.append("id", "1234567");
    console.log(mediaCount);
  };

  const deletePortfolio = (e) => {
    const filteredMediaArray = mediaArray.filter(item => item.id !== e.target.id);
    setMediaArray(filteredMediaArray);
    setMediaCount(mediaCount + 1);
  }

  return (
    <>
      <div className="d-flex align-items-center">

        <img src="../../assets/images/hero/hero-image.png" width="50" height="50" className="rounded-circle profile-picture" />
        <span className="p-ml-2">
          <h6>Jane Doe</h6>
          <div>
            <Dropdown value={selectedViewerGroup} options={viewerGroups} onChange={onViewerGroupChange} optionLabel="name" className="viewerGroups-dropdown" />
          </div>
        </span>
      </div>
        <span className="p-float-label p-mt-5">
          <InputTextarea rows={1} cols={30} className="postInputTitle w-50" autoResize id="postInputArea" />
          <label htmlFor="postInput-Title">Title</label>
        </span>
      <div className="postInputText-modal">
        <div className="p-pb-3">
          <div className="p-float-label">
            <InputTextarea rows={2} cols={30} className="postInputArea" autoResize id="postInputArea" />
            <label htmlFor="postInputArea">Write you post here.</label>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <h6>
            Add:
        </h6>
          <input
            type="file"
            id="timeline-uploadPhoto"
            style={{ display: "none" }}
            onChange={addImage}
            onClick={(e) => e.target.value = null}
            accept="image/*"
          />
          <label htmlFor="timeline-uploadPhoto" >
            <i className="pi pi-images p-ml-2 p-px-1 addToPost-icon"></i>
          </label>
          <input
            type="file"
            id="timeline-uploadVideo"
            style={{ display: "none" }}
            accept="video/*"
            onChange={addVideo}
            onClick={(e) => e.target.value = null}
          />
          <label htmlFor="timeline-uploadVideo" >
            <i className="pi pi-video p-ml-2 p-pr-1 addToPost-icon"></i>
          </label>
        </div>
        <div className="timelinemedia-container p-grid p-pl-3 p-pt-3">
          {mediaArray.map((item, index) => (
            <div className="p-col-12 p-md-6">
              {item.type === "video" &&
                <div className="timelineMediaItem-container">
                  <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[item.id].toggle(e)} />
                  <video width="100%" height="100%" controls className="timelineMediaItem">
                    <source src={item.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
                  </video>
                </div>}
              {item.type === "image" &&
                <div className="timelineMediaItem-container">
                  <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[item.id].toggle(e)} />
                  <img src={item.imageURL} alt="Portfolio Item" width="100%" height="100%" className="timelineMediaItem" />
                </div>
              }
              <span className="portfolioItem-icons">
                <OverlayPanel ref={element => (ref.current[item.id] = element)} >
                  <div className="" onClick={deletePortfolio} id={item.id}><i className="pi pi-trash p-pr-2"></i> Delete Image</div>
                </OverlayPanel>
              </span>
            </div>
          ))}
        </div>
      </div>
    </ >
  );
}

export default CreatePostModal;