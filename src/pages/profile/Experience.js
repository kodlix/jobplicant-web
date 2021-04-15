import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const Experience = (props) => {
  const openEditMode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="star-o" sectionTitle="Experience" id="experienceEdit" addButton="true" onClick={openEditMode} />
        <span>
          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle"><span><b>UNICEF Assistant Photographer</b> at <b className="experienceCompany">UNICEF</b></span> <i className="pi pi-pencil icon-edit" onClick={openEditMode} id="experienceEdit"></i></div>
          <div className="p-card-subtitle p-ml-3"><b><small>(2015 - present)</small></b></div>
          <div className="p-card-body p-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
      </div>
        </span>
        <span>
          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle"><span><b>UNICEF Assistant Photographer</b> at <b className="experienceCompany">UNICEF</b></span> <i className="pi pi-pencil icon-edit"></i></div>
          <div className="p-card-subtitle p-ml-3"><b><small>(2015-2019)</small></b></div>
          <div className="p-card-body p-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
      </div>
        </span>
        <span>
          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle"><span><b>UNICEF Assistant Photographer</b> at <b className="experienceCompany">UNICEF</b></span> <i className="pi pi-pencil icon-edit"></i></div>
          <div className="p-card-subtitle p-ml-3"><b><small>(2015-2019)</small></b></div>
          <div className="p-card-body p-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
      </div>
        </span>
      </div>
    </>
  );
}

export default Experience;