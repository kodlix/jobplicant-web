import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import CommentList from './CommentList';
import ModalMode from './ModalMode';
import PostJobModalMode from './PostJobModal';
import CommentForm from './CommentForm';
import AppNavBar from "components/AppNavBar";
import "./Timeline.css";

const Timeline = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const onClick = (name) => {
    setDisplayModal(true);
  }

  const onHide = (name) => {
    setDisplayModal(false);
  }

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-content">
          <div className="p-grid p-mt-2 p-m-0">
            <div className="p-col-12 p-md-3 p-pl-0 p-py-md-2 p-pr-md-2">
              <div className="p-card">
                <div className="leftpanel-top-container"></div>
                <div className="leftpanel-bottom-container">
                  <img src="../../assets/images/hero/hero-image.png" width="80" height="80" className="rounded-circle profile-picture" />
                  <h4 className="p-mt-2">
                    Jane Doe
                  </h4>
                  <p className="p-mb-3">
                    Graphic Designer at Self Employed
                  </p>
                  <div className="timeline-leftpanel-connection">
                    <h5>
                      Following
                    </h5>
                    <h6>
                      45
                    </h6>
                  </div>
                  <div className="timeline-leftpanel-connection">
                    <h5>
                      Followers
                    </h5>
                    <h6>
                      45
                    </h6>
                  </div>
                  <div className="timeline-leftpanel-connection">
                    <h6>
                      View Profile
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-card p-mt-2">
                <div className="p-card-title cardtitle p-mb-0">
                  Suggestions
                  </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button" />
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-6 p-px-0">
              <div className="p-card p-grid p-mb-2 p-mt-0 p-mx-0 p-p-3 align-items-center">
                <div className="p-col-2 text-center">
                  <img src="../../assets/logo.png" width="80" height="80" className="rounded-circle profile-picture" />
                </div>
                <div className="p-col-10">
                  <Button label="Start a Post" className="postInputButton" onClick={() => onClick('displayPostModal')} />
                  <ModalMode onHide={onHide} onClick={onClick} displayModal={displayModal} />
                  {/* <InputText placeholder="Start a post" className="w-100" /> */}
                  {/* <div className="d-flex justify-content-around p-mt-2"> */}
                  {/* <Button label="Photo" icon="pi pi-check" />
                    <Button label="Video" icon="pi pi-check" />
                    <Button label="Job" icon="pi pi-check" /> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="p-card p-p-5">
                <span className="d-flex justify-content-between">
                  <span>
                    <img src="../../assets/logo.png" width="70" height="70" className="rounded-circle p-mb-2 p-mr-3 profile-picture" />
                    <span>
                      <div className="p-card-title cardtitle-posts p-mb-0">Jane Doe</div>
                      <div className="cardtitle-posttime"><i className="pi pi-clock p-pr-1"></i>
                        <span>
                          3 min ago
                        </span>
                      </div>
                    </span>
                  </span>
                  <div className="dropdown font-weight-bold ml-2">
                    <i type="button" className="pi pi-ellipsis-v" role="button" id="dropdownMenuLink"
                      data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li className="dropdown-item">
                        Edit
                      </li>
                      <li className="dropdown-item">
                        Delete
                      </li>
                    </ul>
                  </div>
                </span>
                <div className="poster-description">
                  <i className="pi pi-briefcase p-pr-1"></i>
                  <span>Software Engineer</span>
                  <i className="pi pi-map-marker p-pl-2 p-pr-1"></i>
                  <span>Nigeria</span>
                </div>
                <h6 className="p-my-3">Senior Web Developer</h6>
                <Tag value="Full Time" className="p-mr-3"></Tag>
                <span>$30/hr</span>
                <p className="p-my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus urna, fermentum eu eros vel, hendrerit elementum ex. Integer augue sem, ornare id consectetur in, lobortis mattis sapien. Ut metus augue, pharetra et dui et, accumsan vulputate nulla. Aliquam aliquam vestibulum arcu tincidunt pellentesque. Fusce mollis sodales laoreet. Quisque pellentesque pellentesque eros. Sed at dui non magna facilisis euismod. Donec maximus tortor in lacus vehicula lacinia. Curabitur et dignissim purus. Aliquam pellentesque lectus id libero lacinia aliquet. In vel arcu in ipsum posuere laoreet sit amet eu justo. Vivamus nisl felis, maximus sit amet dui id, suscipit porttitor enim. Curabitur consequat ligula non varius placerat.

                  Aliquam laoreet hendrerit ligula vitae laoreet. Curabitur placerat, mauris non maximus dapibus, dolor sem cursus purus, accumsan iaculis velit arcu ac ex. Maecenas at leo sagittis, euismod arcu et, molestie dui. Morbi ipsum nisl, consequat in velit luctus, tempus sollicitudin ex. Pellentesque lacus metus, iaculis vel ligula eget, convallis ultricies magna. Suspendisse potenti. Etiam porta lobortis ex. Cras nisl tellus, pulvinar non blandit sed, ultrices non sapien.
                </p>
                <Tag value="CSS" className="p-mr-3 skilltag"></Tag>
                <Tag value="HTML" className="p-mr-3 skilltag"></Tag>
                <Tag value="NodeJS" className="p-mr-3 skilltag"></Tag>
                <Tag value="ReactJS" className="p-mr-3 skilltag"></Tag>
                <div className="cardtitle-statusbar p-my-3 p-py-3">
                  <span className="d-flex">
                    <span className="post-statusbar-content">
                      <i className="pi pi-heart p-pr-1"></i>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 172 172"
                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667z"></path></g></g></svg> */}
                      {/* <img src="https://img.icons8.com/material-outlined/20/000000/hearts.png" /> */}
                      <span>
                        Like
                    </span>
                    </span>
                    <span className="post-statusbar-content">
                      <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/job-searcher.jpg" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle likers-picture" />
                    </span>
                    <span className="post-statusbar-content">
                      <i className="pi pi-comment p-ml-3 p-pr-1"></i>
                      <span>
                        Comments (15)
                     </span>
                    </span>
                  </span>
                  <span className="post-statusbar-content">
                    <i className="pi pi-eye p-ml-3 p-pr-1"></i>
                    <span>
                      Views (15)
                  </span>
                  </span>
                </div>
                <CommentForm />
                <CommentList />
              </div>
            </div>
            <div className="p-col-12 p-md-3 p-pr-0 p-py-md-2 p-pl-md-2">
              <div className="p-card">
                <div className="p-card-title cardtitle">
                  Recent Jobs
                </div>
                <div className="p-pb-2">
                  <Link to="/timeline" className="p-card-body p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                  </Link>
                  <Link to="/timeline" className="p-card-body p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                  </Link>
                  <Link to="/timeline" className="p-card-body p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;