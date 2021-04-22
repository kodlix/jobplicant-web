import CompanyBiography from './CompanyBiography';
import CompanyEditMode from '../companyEditMode/CompanyEditMode';
import CompanyDetails from './CompanyDetails';
import CompanyContactInformation from './CompanyContactInformation';
const CompanyInfoComponent = ({ componentStatus, toggleEditMode, dataFromBack }) => {
  return (
    <>
      {
        !Object.keys(componentStatus).length && <div className="content-body">
          <CompanyBiography onClick={toggleEditMode} id={dataFromBack.companyBiography?.id || ""} companyBiography={dataFromBack.companyBiography} />
          <div className="p-grid">
            <div className="p-col-12 p-md-8 content-leftPanel">
              <CompanyDetails onClick={toggleEditMode} id={dataFromBack.companyDetails?.id || ""} companyDetails={dataFromBack.companyDetails} />
            </div>
            <div className="p-col-12 content-rightPanel p-md-4">
              <CompanyContactInformation onClick={toggleEditMode} id={dataFromBack.companyContactInfo?.id || ""} companyContactInfo={dataFromBack.companyContactInfo} />
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default CompanyInfoComponent;