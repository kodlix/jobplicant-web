import React, { useState } from 'react'
import Biography from './Biography'
import Education from './Education'
import EditMode from './EditMode'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './Hobbies'
import ProfessionsOfInterest from './ProfessionsOfInterest'
import LocationOfInterest from './LocationOfInterest'
import ContactInformation from './ContactInformation'
import Portfolio from './Portfolio'
import './UserProfile.css'
import AppNavBar from 'components/AppNavBar'
import SectionHeader from './SectionHeader'

const UserProfile = () => {
  const rating = 4.5
  const [componentStatus, setComponentStatus] = useState({})
  const [imageSrc, setImageSrc] = useState('')
  const uploadProfilePicture = () => {
    console.log('profile')
  }

  const handleImageExpansion = (propSrc) => {
    const src = imageSrc ? '' : propSrc
    setImageSrc(src)
  }

  const toggleEditMode = (e) => {
    let currentStatus =
      componentStatus[e.currentTarget.id] === true ? false : true
    setComponentStatus({ [e.currentTarget.id]: currentStatus })
  }

  return (
    <>
      <div class="d-flex flex-column">
        <AppNavBar />{' '}
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
        <div className="background">
          <div className="content-container">
            <div className="userProfile-header">
              <span className="profilePic-container">
                <img
                  src="../../assets/logo.png"
                  alt="User Image"
                  width="130"
                  height="130"
                  className="profile-picture"
                />
                <label className="profilePic-label" htmlFor="upload-button">
                  <i className="pi pi-camera"></i>
                </label>
              </span>
              <input
                type="file"
                id="upload-button"
                style={{ display: 'none' }}
                onChange={uploadProfilePicture}
              />
              <div>
                <h3 className="username p-mr-2">Jane Doe</h3>
                {!componentStatus.personalInfoEdit && (
                  <i
                    className="pi pi-pencil p-pr-3 personalInfo-edit"
                    id="personalInfoEdit"
                    onClick={toggleEditMode}
                  >
                    &nbsp;<u>(Edit Personal Info)</u>
                  </i>
                )}
                <div>Photographer at UNICEF</div>
                <span>
                  <div className="stars" style={{ '--rating': rating }}></div>
                </span>
              </div>
            </div>
            <div className="p-grid">
              <div className="p-col-12 p-md-9 content-smallscreen">
                <div className="content-tab">
                  <button>
                    <i className="pi pi-info-circle"></i>
                    <div className="tab-titles">Info</div>
                  </button>
                  <button>
                    <i className="pi pi-briefcase"></i>
                    <div className="tab-titles">Jobs</div>
                  </button>
                  <button>
                    <i className="pi pi-user"></i>
                    <div className="tab-titles">Contacts</div>
                  </button>
                  <button>
                    <i className="pi pi-users"></i>
                    <div className="tab-titles">Groups</div>
                  </button>
                  <button className="tab-portfolio">
                    <i className="pi pi-images"></i>
                    <div className="tab-titles">Portfolio</div>
                  </button>
                </div>
                <div className="content-body">
                  {/* biography */}
                  <div className="p-card p-mt-2">
                    <SectionHeader
                      icon="bookmark"
                      sectionTitle="Biography"
                      id="biographyEdit"
                      addButton="true"
                      editButton="true"
                    />
                    <div className="p-card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque tempor aliquam felis, nec condimentum ipsum
                      commodo id. Vivamus sit amet augue nec urna efficitur
                      tincidunt. Vivamus consectetur aliquam lectus commodo
                      viverra. Nunc eu augue nec arcu efficitur faucibus.
                      Aliquam accumsan ac magna convallis bibendum. Quisque
                      laoreet augue eget augue fermentum scelerisque. Vivamus
                      dignissim mollis est dictum blandit. Nam porta auctor
                      neque sed congue. Nullam rutrum eget ex at maximus. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      eget vestibulum lorem.
                    </div>
                  </div>
                  <div className="p-grid">
                    <div className="p-col-12 p-md-8 content-leftPanel">
                      {/* experience */}
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="star-o"
                          sectionTitle="Experience"
                          id="experienceEdit"
                          addButton="true"
                          onClick={openEditMode}
                        />
                        <span>
                          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
                            <span>
                              <b>UNICEF Assistant Photographer</b>
                              at
                              <b className="experienceCompany">UNICEF</b>
                            </span>
                            <i
                              className="pi pi-pencil icon-edit"
                              onClick={openEditMode}
                              id="experienceEdit"
                            ></i>
                          </div>
                          <div className="p-card-subtitle p-ml-3">
                            <b>
                              <small>(2015 - present)</small>
                            </b>
                          </div>
                          <div className="p-card-body p-text-secondary">
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
                          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
                            <span>
                              <b>UNICEF Assistant Photographer</b>
                              at
                              <b className="experienceCompany">UNICEF</b>
                            </span>
                            <i className="pi pi-pencil icon-edit"></i>
                          </div>
                          <div className="p-card-subtitle p-ml-3">
                            <b>
                              <small>(2015-2019)</small>
                            </b>
                          </div>
                          <div className="p-card-body p-text-secondary">
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
                          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
                            <span>
                              <b>UNICEF Assistant Photographer</b>
                              at
                              <b className="experienceCompany">UNICEF</b>
                            </span>
                            <i className="pi pi-pencil icon-edit"></i>
                          </div>
                          <div className="p-card-subtitle p-ml-3">
                            <b>
                              <small>(2015-2019)</small>
                            </b>
                          </div>
                          <div className="p-card-body p-text-secondary">
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
                      <Education onClick={toggleEditMode} />
                    </div>
                    <div className="p-col-12 content-rightPanel p-md-4">
                      <Skills onClick={toggleEditMode} />
                      <Hobbies onClick={toggleEditMode} />
                      <ProfessionsOfInterest onClick={toggleEditMode} />
                      <LocationOfInterest onClick={toggleEditMode} />
                      <ContactInformation onClick={toggleEditMode} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel">
                <Portfolio
                  expandImage={handleImageExpansion}
                  onClick={toggleEditMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
