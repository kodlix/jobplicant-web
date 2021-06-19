import React, { useState, useRef, useEffect } from 'react';
import agent, { API_ROOT } from "../../services/agent.service"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InputTextarea } from 'primereact/inputtextarea';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ToggleButton } from 'primereact/togglebutton';
import { Editor } from 'primereact/editor';
import { createPost, editPost, viewPost } from "store/modules/timeline";
import { v4 as uuidv4 } from "uuid";
import "./Timeline.css";

const CreatePostModal = ({ postId, clearModalInput }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.timeline.postByPostId);
  const ref = useRef({});
  const [mediaArray, setMediaArray] = useState([]);
  const [postObject, setPostObject] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const { register, handleSubmit, formState: { errors }, setValue } = useForm("");
  const [selectedViewerGroup, setSelectedViewerGroup] = useState({ name: 'Public', code: 'PBC' });
  const viewerGroups = [
    { name: 'Public', code: 'PBC' },
    { name: 'Group', code: 'GRP' }
  ];
  // const [mediaCount, setMediaCount] = useState(0);

  const onViewerGroupChange = (e) => {
    setSelectedViewerGroup(e.value);
  };

  useEffect(() => {
    if (postId) {
      dispatch(viewPost(postId));
    }
    else {
      setPostObject({});
    }
  }, [dispatch]);

  useEffect(() => {
    if (postId) {
      setValue("title", post.title);
      setValue("body", post.body);
      const imageurl = API_ROOT + "/" + post.postImage
      setImage({
        preview: imageurl,
        raw: post.postImage
      });
      setPostObject({ title: post.title, body: post.body });
    }
    else {
      setPostObject({});
    }
  }, [post]);


  const handleImageChange = e => {
    if (e.target.files.length) {
      // const valid = validFileType(e.target.files[0])
      // if (!valid) {
      //     alert("only image of type (png, jpg, jpeg) file is allowed");
      //     return;
      // }
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  
  // const addImage = e => {
  //   if (e.target.files.length) {
  //     // const valid = validFileType(e.target.files[0])
  //     // if (!valid) {
  //     //     alert("only image of type (png, jpg, jpeg) file is allowed");
  //     //     return;
  //     // }
  //     const newMediaArray = [...mediaArray];
  //     newMediaArray.unshift({
  //       id: uuidv4(),
  //       raw: e.target.files[0],
  //       preview: URL.createObjectURL(e.target.files[0])
  //     });
  //     setMediaArray(newMediaArray);
  //   }

  //   if (e.target.files.length) {
  //     const file = e.target.files[0];
  //     const preview = URL.createObjectURL(file);
  //     const newMediaArray = [...mediaArray];
  //     // newMediaArray.unshift({ id: "portfolio" + (mediaCount + 1), type: "image", imageURL: preview });
  //     setMediaArray(newMediaArray);
  //     // setMediaCount(mediaCount + 1);
  //     setSelectedFiles([...selectedFiles, file]);

  //   }
  // };

  // const addVideo = e => {
  //   const preview = URL.createObjectURL(e.target.files[0]);
  //   const newMediaArray = [...mediaArray];
  //   newMediaArray.unshift({ id: "portfolio" + (mediaCount + 1), type: "video", videoURL: preview });
  //   setMediaArray(newMediaArray);
  //   setMediaCount(mediaCount + 1);
  //   let formData = new FormData();
  //   formData.append("videoFile", {
  //     name: e.target.files[0].name,
  //     uri: preview,
  //     type: e.target.files[0].type
  //   });
  //   formData.append("id", "1234567");
  // };

  const deleteMediaItem = (e) => {
    const filteredMediaArray = mediaArray.filter(item => item.id !== e.target.id);
    setMediaArray(filteredMediaArray);
    // setMediaCount(mediaCount + 1);
  };

  const inputChange = (e, inputName) => {
    const inputValue =
      inputName && (inputName === "body")
        ? e.htmlValue
        : e.target.value
    const updatedPostObject = Object.assign({}, postObject);
    updatedPostObject[inputName] = inputValue;
    setPostObject({ ...postObject, ...updatedPostObject });
    setValue(inputName, inputValue, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    if (image.raw) {
      formData.append("postImage", image.raw)
    };
    if (postId) {
      dispatch(editPost(postId, formData));
    }
    else {
      dispatch(createPost(formData));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <img src="../../assets/images/hero/hero-image.png" width="50" height="50" className="rounded-circle profile-picture" />
          <span className="p-ml-2">
            <h6>Jane Doe</h6>
            <div>
              <Dropdown value={selectedViewerGroup} options={viewerGroups} onChange={onViewerGroupChange} optionLabel="name" className="viewerGroups-dropdown" />
            </div>
          </span>
        </div>
        <div className="p-mt-3">
          <label htmlFor="title">
            <div className="createPostModal-title">Title *
            {errors.title &&
                <small className="text-danger font-weight-bold">
                  {errors.title.message}
                </small>}
            </div>

          </label>
        </div>
        <InputTextarea rows={1} cols={30} className="timelineModal-Input w-50" defaultValue={postObject.title} autoResize id="title"
          {...register("title", { required: " Title is required" })} name="title"
          onChange={(e) => { inputChange(e, "title") }}
        />
        <div className="">
          <label htmlFor="body">
            <div className="createPostModal-title p-mt-2">Body *
            {errors.body &&
                <small className="text-danger font-weight-bold">
                  {errors.body.message}
                </small>}
            </div>
          </label>
        </div>
        <div className="timelineModal-Input p-p-2">
          <Editor style={{ height: '320px' }} value={postObject.body} onTextChange={(e) => { inputChange(e, "body") }}
            {...register("body", { required: " Post content is required" })} id="body" name="body" />
          {/* <div className="p-pb-3">
            <InputTextarea rows={7} autoResize className="postInputArea" id="postInputArea"
              {...register("body", { required: " Post content is required" })} name="body" placeholder="Write you post here..."
            />
          </div> */}
          <div className="d-flex justify-content-end align-items-center p-mt-3">
            <h6>
              Add:
        </h6>
            <input
              type="file"
              id="timeline-uploadPhoto"
              style={{ display: "none" }}
              // onChange={addImage}
              onChange={handleImageChange}
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
              // onChange={addVideo}
              onClick={(e) => e.target.value = null}
            />
            <label htmlFor="timeline-uploadVideo" >
              <i className="pi pi-video p-ml-2 p-pr-1 addToPost-icon"></i>
            </label>
          </div>
          <div className=" p-grid p-pt-3">
            <div className="p-col-12 p-md-6">
              {/* {item.type === "video" &&
                <div className="timelineMediaItem-container">
                  <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[item.id].toggle(e)} />
                  <video width="100%" height="100%" controls className="timelineMediaItem">
                    <source src={item.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
                  </video>
                </div>} */}
              {
                image.preview &&
                <div className="timelineMediaItem-container">
                  <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[image].toggle(e)} />
                  {/* <img
                  src={`${API_ROOT}/${post.postImage}`}
                  alt="Portfolio Item" width="100%" height="100%" className="timelineMediaItem" /> */}

                  <img src={image.preview} alt="Preview" width="100%" height="100%" className="timelineMediaItem" />
                </div>
              }
              <span className="portfolioItem-icons">
                <OverlayPanel ref={element => (ref.current[image] = element)} >
                  <div className="" onClick={deleteMediaItem} id={image}><i className="pi pi-trash p-pr-2"></i> Delete Image</div>
                </OverlayPanel>
              </span>
            </div>
            {/* {mediaArray.map((item, index) => (
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
                    <div className="" onClick={deleteMediaItem} id={item.id}><i className="pi pi-trash p-pr-2"></i> Delete Image</div>
                  </OverlayPanel>
                </span>
              </div>
            ))} */}
          </div>

        </div>
        <div>
          <Button label="Post" autoFocus className="d-flex p-mt-3" type="submit" />
        </div>
      </form>
    </ >
  );
}

export default CreatePostModal;