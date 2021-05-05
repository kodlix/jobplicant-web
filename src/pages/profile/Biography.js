import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const Biography = (props) => {
  const mode = (event) => {
    props.onClick(event);
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="bookmark" sectionTitle="Biography" id="biographyEdit" addButton="true" editButton="true" onClick={mode} />
        <div className="p-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
      </div>
      </div>
    </>
  );
}

export default Biography;