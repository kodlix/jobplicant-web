import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNavBar from 'components/AppNavBar'
import SectionHeader from './SectionHeader'
import ModalForm from './ModalForm';
import { loadProfileInfo } from 'store/modules/account'
import { openModal } from 'store/modules/modal';
import { PROFILE } from 'constants/profile';


const UserProfile = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.account.profileInfo);
  const rating = 4.5;
  const [mode, setMode] = useState("");
  const [itemToEdit, setItemToEdit] = useState({});


  useEffect(() => {
    dispatch(loadProfileInfo());
  }, []);

  const expandImage = () => {

  }

  const openCreate = (name) => {
    setMode('create');
    dispatch(openModal(name))
  }

  const openEdit = (name, data) => {
    setMode('edit');
    setItemToEdit(data);
    dispatch(openModal(name));

  }

  const uploadProfilePicture = () => {
    console.log('profile')
  }



  return (
    <>
      <div className='d-flex flex-column'>
        <AppNavBar />
        {/* <div className='portfolioItem-container'>
          <img
            src={imageSrc}
            alt='Portfolio Item'
            width='100%'
            height='40%'
            className='portfolioItem-expanded'
          />
        </div>
        <div
          className='portfolioItem-overlay'
          onClick={handleImageExpansion}
        ></div> */}
        <div className='background'>
          <div className='content-container'>
            <div className='userProfile-header'>
              <span className='profilePic-container'>
                <img
                  src='../../assets/logo.png'
                  alt='User Image'
                  width='130'
                  height='130'
                  className='profile-picture'
                />
                <label className='profilePic-label' htmlFor='upload-button'>
                  <i className='pi pi-camera'></i>
                </label>
              </span>
              <input
                type='file'
                id='upload-button'
                style={{ display: 'none' }}
                onChange={uploadProfilePicture}
              />
              <div>
                <h3 className='username p-mr-2'>{profileInfo.firstName} {profileInfo.lastName}</h3>
                <i
                  className='pi pi-pencil p-pr-3 personalInfo-edit'
                  id='personalInfoEdit'
                // onClick={toggleEditMode}
                >
                  &nbsp;<u>(Edit Personal Info)</u>
                </i>
                <div>Photographer at UNICEF</div>
                <span>
                  <div className='stars' style={{ '--rating': rating }}></div>
                </span>
              </div>
            </div>
            <div className='p-grid'>
              <div className='p-col-12 p-md-9 content-smallscreen'>
                <div className='content-tab'>
                  <button>
                    <i className='pi pi-info-circle text-white'></i>
                    <div className='tab-titles'>Info</div>
                  </button>
                  <button>
                    <i className='pi pi-briefcase text-white' ></i>
                    <div className='tab-titles'>Jobs</div>
                  </button>
                  <button>
                    <i className='pi pi-user text-white'></i>
                    <div className='tab-titles'>Contacts</div>
                  </button>
                  <button>
                    <i className='pi pi-users text-white'></i>
                    <div className='tab-titles'>Groups</div>
                  </button>
                  <button className='tab-portfolio text-white'>
                    <i className='pi pi-images'></i>
                    <div className='tab-titles'>Portfolio</div>
                  </button>
                </div>
                <div className='content-body'>
                  {/* biography */}
                  <div className='p-card p-mt-2'>
                    <SectionHeader
                      icon='bookmark'
                      sectionTitle='Biography'
                      id='biographyEdit'
                      showAddButton='true'
                      showEditButton='true'
                      openModalOnCreate={() => openEdit(PROFILE.BIOGRAPHY)}
                      openModalOnEdit={() => openCreate(PROFILE.BIOGRAPHY)}
                      hasData={profileInfo?.profile}
                    />
                    <div className='p-card-body'>
                      {profileInfo.profile}
                    </div>
                  </div>
                  <div className='p-grid'>
                    <div className='p-col-12 p-md-8 content-leftPanel'>
                      {/* experience */}
                      <div className='p-card p-mt-2'>
                        <SectionHeader
                          icon='star-o'
                          sectionTitle='Experience'
                          id='experienceEdit'
                          showAddButton='true'
                          openModalOnCreate={() => openCreate(PROFILE.EXPERIENCE)}
                          openModalOnEdit={() => openEdit(PROFILE.EXPERIENCE)}
                        />
                        {
                          profileInfo.experiences.map((item, index) =>
                            <span>
                              <div className='p-card-subtitle p-ml-3 p-mb-0 mainTitle'>
                                <span>
                                  <b>{item.jobTitle}</b>&nbsp;
                              at
                              &nbsp;<b className='experienceCompany'>{item.company}</b>
                                </span>
                                <i
                                  className='pi pi-pencil icon-edit'
                                  onClick={() => openEdit(PROFILE.EXPERIENCE, item)}
                                  id='experienceEdit'
                                ></i>
                              </div>
                              <div className='p-card-subtitle p-ml-3'>
                                <b>
                                  <small>({item.startDate} - {item.endDate || 'present'})</small>
                                </b>
                              </div>
                              <div className='p-card-body p-text-secondary'>
                                {item.description}
                              </div>
                            </span>)
                        }
                      </div>
                      <div className='p-card p-mt-2'>
                        <SectionHeader
                          icon='book'
                          sectionTitle='Education'
                          id='educationEdit'
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.EDUCATION)}
                          openModalOnEdit={() => openCreate(PROFILE.EDUCATION)}
                        />
                        <span>
                          <div className='p-card-subtitle p-ml-3 p-mb-0 mainTitle'>
                            <span>
                              <b>Msc</b> in{' '}
                              <b className='experienceCompany'>
                                Arts and Literature
                              </b>
                            </span>
                            <i
                              className='pi pi-pencil'
                              // onClick={mode}
                              id='educationEdit'
                            ></i>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-0'>
                            <b>
                              <small>(2015-2019)</small>
                            </b>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-2'>
                            <b>
                              <small>University of Lagos</small>
                            </b>
                          </div>
                          <div className='p-card-body p-text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque tempor aliquam felis, nec condimentum
                            ipsum commodo id. Vivamus sit amet augue nec urna
                            efficitur tincidunt. Vivamus consectetur aliquam
                            lectus commodo viverra. Nunc eu augue nec arcu
                            efficitur faucibus. Aliquam accumsan ac magna
                            convallis bibendum. Quisque laoreet augue eget augue
                            fermentum scelerisque. Vivamus dignissim mollis est
                            dictum blandit. Nam porta auctor neque sed congue.
                            Nullam rutrum eget ex at maximus. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Donec eget
                            vestibulum lorem.
                          </div>
                        </span>
                        <span>
                          <div className='p-card-subtitle p-ml-3 p-mb-0 mainTitle'>
                            <span>
                              <b>Msc</b> in{' '}
                              <b className='experienceCompany'>
                                Arts and Literature
                              </b>
                            </span>
                            <i className='pi pi-pencil'></i>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-0'>
                            <b>
                              <small>(2015-2019)</small>
                            </b>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-2'>
                            <b>
                              <small>University of Lagos</small>
                            </b>
                          </div>
                          <div className='p-card-body p-text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque tempor aliquam felis, nec condimentum
                            ipsum commodo id. Vivamus sit amet augue nec urna
                            efficitur tincidunt. Vivamus consectetur aliquam
                            lectus commodo viverra. Nunc eu augue nec arcu
                            efficitur faucibus. Aliquam accumsan ac magna
                            convallis bibendum. Quisque laoreet augue eget augue
                            fermentum scelerisque. Vivamus dignissim mollis est
                            dictum blandit. Nam porta auctor neque sed congue.
                            Nullam rutrum eget ex at maximus. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Donec eget
                            vestibulum lorem.
                          </div>
                        </span>
                        <span>
                          <div className='p-card-subtitle p-ml-3 p-mb-0 mainTitle'>
                            <span>
                              <b>Msc</b> in{' '}
                              <b className='experienceCompany'>
                                Arts and Literature
                              </b>
                            </span>
                            <i className='pi pi-pencil'></i>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-0'>
                            <b>
                              <small>(2015-2019)</small>
                            </b>
                          </div>
                          <div className='p-card-subtitle p-ml-3 p-mb-2'>
                            <b>
                              <small>University of Lagos</small>
                            </b>
                          </div>
                          <div className='p-card-body p-text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque tempor aliquam felis, nec condimentum
                            ipsum commodo id. Vivamus sit amet augue nec urna
                            efficitur tincidunt. Vivamus consectetur aliquam
                            lectus commodo viverra. Nunc eu augue nec arcu
                            efficitur faucibus. Aliquam accumsan ac magna
                            convallis bibendum. Quisque laoreet augue eget augue
                            fermentum scelerisque. Vivamus dignissim mollis est
                            dictum blandit. Nam porta auctor neque sed congue.
                            Nullam rutrum eget ex at maximus. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Donec eget
                            vestibulum lorem.
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className='p-col-12 content-rightPanel p-md-4'>
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="tag"
                          sectionTitle="Skills"
                          id="skillEdit"
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.SKILL)}
                          openModalOnEdit={() => openCreate(PROFILE.SKILL)}
                        // onClick={mode}
                        />
                        <div className="p-card-body">
                          <span className="skilltag"><i className=""></i>CSS</span>
                          <span className="skilltag"><i className=""></i>Photosop</span>
                          <span className="skilltag"><i className=""></i>Adobe</span>
                          <span className="skilltag"><i className=""></i>CSS</span>
                        </div>
                      </div>
                      {/* hobbies */}
                      <div className="p-card p-mt-2">
                        <SectionHeader icon="heart" sectionTitle="Hobbies" id="hobbyEdit" showAddButton="true" showEditButton="true"
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.HOBBY)}
                          openModalOnEdit={() => openCreate(PROFILE.HOBBY)}
                          hasData={profileInfo?.profile}

                        />
                        <div className="p-card-body p-text-secondary">
                          <ul className="listStyle p-grid">
                            {profileInfo.hobbies && profileInfo.hobbies.length > 0 && profileInfo.hobbies.map(hobby =>
                              <li className="p-col-4">{hobby}</li>
                            )}

                          </ul>
                        </div>
                      </div>
                      {/* profession of interest */}
                      <div className="p-card p-mt-2">
                        <SectionHeader icon="briefcase"
                          sectionTitle="Professions of Interest"
                          id="POIEdit" showAddButton="true"
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.PROFESSION)}
                          openModalOnEdit={() => openCreate(PROFILE.PROFESSION)}
                        // onClick={mode} 
                        />
                        <div className="p-card-body p-text-secondary">
                          <ul className="listStyle">
                            <li>Astronomy</li>
                            <li>Graphic Design</li>
                          </ul>
                        </div>
                      </div>
                      {/* location of interest */}
                      <div className="p-card p-mt-2">
                        <SectionHeader icon="map-marker"
                          sectionTitle="Location of Interest"
                          id="LOIEdit"
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.LOCATION)}
                          openModalOnEdit={() => openCreate(PROFILE.LOCATION)}
                        />
                        <div className="p-card-body p-text-secondary">
                          Germany
                        </div>
                      </div>
                      {/* contact information */}
                      <div className="p-card p-mt-2">
                        <SectionHeader icon="phone" sectionTitle="Contact Information"
                          id="contactInfoEdit" showAddButton="true" showEditButton="true"
                          showAddButton='true'
                          showEditButton='true'
                          openModalOnCreate={() => openEdit(PROFILE.CONTACT_INFO)}
                          openModalOnEdit={() => openCreate(PROFILE.CONTACT_INFO)}
                          hasData={profileInfo?.profile}

                        />
                        <div className="p-card-body p-text-secondary">
                          <span><b>Phone Number:</b>{profileInfo.contactPhoneNumber}</span>
                          <span><b>Email: </b>{profileInfo.contactEmail}</span>
                          <span><b>Location: </b>{profileInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio */}
              <div className='p-col-12 p-md-3 p-pt-2 portfolio-panel'>
                <div className="p-card">
                  <SectionHeader icon="images" sectionTitle="Portfolio"
                    id="portfolioEdit"
                    showAddButton='true'
                    showEditButton='true'
                    openModalOnCreate={() => openEdit(PROFILE.PORTFOLIO)}
                    openModalOnEdit={() => openCreate(PROFILE.PORTFOLIO)}
                  />
                  <div className="p-card-body p-grid p-mt-2">
                    <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
                      <img src="../../assets/images/breadcrumb/breadcrumb-bg.jpg" alt="Portfolio Item" width="100%" height="100%" />
                    </button>
                    <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
                      <img src="../../assets/logo.png" alt="Portfolio Item" width="100%" height="100%" />
                    </button>
                    <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
                      <img src="../../assets/images/hero/hero-image.png" alt="Portfolio Item" width="100%" height="100%" />
                    </button>
                    <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
                      <img src="../../assets/images/hero/home-page4.jpg" alt="Portfolio Item" width="100%" height="100%" />
                    </button>
                    <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
                      <img src="../../assets/logo.png" alt="Portfolio Item" width="100%" height="100%" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalForm data={profileInfo} mode={mode} itemToEdit={itemToEdit} />
    </>
  )
}

export default UserProfile
