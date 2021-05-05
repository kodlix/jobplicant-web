import React from 'react';
import { withRouter } from 'react-router';
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import CompanyEditMode from '../companyInfo/companyEditMode/CompanyEditMode';
import companyEditNameMap from '../companyInfo/companyEditMode/companyEditNameMap.json';

const dataFromBack = {
  companyBiography: "companyLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.",
  companyDetails: { industry: { name: 'Networking', id: 'NY1' }, dateOfEstablishment: "2012-10-05T14:48:00.000Z", numberOfEmployees: 23, contactPerson: "Jane Doe", regNo: "hfg-2222" },
  companyContactInfo: { phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", city: "ikeja", state: { id: 1, code: "ABI", name: "Abia State", countryId: 1 }, country: {
    capital: "Abuja",
    code: "NGA",
    id: 1,
    name: "Nigeria"
  }, companyURL: "www.example.com", address: "No. 4, Isaac John Street" },
  companyPersonalInfo: { nothing: "yet" }
}

const CompanyProfileEdit = (props) => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(props.location.search);
  const title = decodeURI(searchParams.get('title'));
  let data = null;
  console.log(title)

  if (title === companyEditNameMap.companyBiography) {
    data = dataFromBack.companyBiography;
  }

  if (title === companyEditNameMap.companyDetails) {
    data = dataFromBack.companyDetails;
  }

  if (title === companyEditNameMap.companyContactInfo) {
    data = dataFromBack.companyContactInfo;
  }
  return <CompanyEditMode title={title} onClose={() => dispatch(push("./companyinformation"))} data={data} />;
}

export default withRouter(CompanyProfileEdit);
