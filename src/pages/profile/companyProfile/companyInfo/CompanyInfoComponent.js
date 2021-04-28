import React,{useState} from 'react';
import CompanyBiography from './CompanyBiography';
import CompanyEditMode from './companyEditMode/CompanyEditMode';
import CompanyDetails from './CompanyDetails';
import CompanyContactInformation from './CompanyContactInformation';
const CompanyInfoComponent = () => {
  const toggleEditMode = (infoFromChild) => {
    let currentStatus = componentStatus[infoFromChild.id] === infoFromChild.id ? "" : infoFromChild.id;
    if (currentStatus) {
      setComponentStatus({ [infoFromChild.sectionTitle]: currentStatus })
    }
    else {
      setComponentStatus({})
    }
  }

  const [componentStatus, setComponentStatus] = useState({});
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
  return (
    <>
      {
        !Object.keys(componentStatus).length
        &&
        <div className="content-body">
          <CompanyBiography onClick={toggleEditMode} id={dataFromBack.companyBiography?.id || ""} companyBiography={dataFromBack.companyBiography} />
          <div className="p-grid">
            <div className="p-col-12 p-md-8 content-leftPanel">
              <CompanyDetails onClick={toggleEditMode} id={dataFromBack.companyDetails?.id || ""} companyDetails={dataFromBack.companyDetails} />
            </div>
            <div className="p-col-12 content-rightPanel p-md-4">
              <CompanyContactInformation onClick={toggleEditMode} id={dataFromBack.companyContactInfo?.id || ""} companyContactInfo={dataFromBack.companyContactInfo} />
            </div>
          </div>
        </div>}
      {
        <CompanyEditMode componentStatus={componentStatus} onClick={toggleEditMode} dataFromBack={dataFromBack} />
      }
    </>
  );
}

export default CompanyInfoComponent;