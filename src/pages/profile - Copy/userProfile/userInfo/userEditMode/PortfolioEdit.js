import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Toast } from 'primereact/toast';
import SectionHeader from '../../../SectionHeader';
import '../../../UserProfile.css';
import ModeFooter from '../../../../profile/ModeFooter';

const PortfolioEdit = ({ data, closeEditMode }) => {
  const { handleSubmit } = useForm();
  const toast = useRef(null);
  const ref = useRef({});
  const [portfolioItems, setPortfolioItems] = useState([]);
  useEffect(() => {
    if (data?.length > 0) {
      setPortfolioItems(data)
    }
  }, [data]);

  const deletePortfolio = (e) => {
    const newPortfolioArray = portfolioItems.filter(item => item.id !== e.target.id);
    setPortfolioItems(newPortfolioArray);
  }

  const addPortfolio = e => {
    if (e.target.files.length) {
      const preview = URL.createObjectURL(e.target.files[0]);
      const newPortfolioArray = [...portfolioItems];
      newPortfolioArray.unshift({ id: "portfolio" + (portfolioItems.length + 1), imageURL: preview })
      setPortfolioItems(newPortfolioArray);
    }
  };

  const componentStatus = { portfolio: 'add' };
  if (data?.length > 0) {
    componentStatus.portfolio = 'edit';
  }


  const portfolioSubmit = () => {
    console.log(portfolioItems);
    return;
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <Toast ref={toast} />
        <SectionHeader componentStatus={componentStatus} icon="images" sectionTitle="Portfolio" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(portfolioSubmit)}>
            <span className="width-100 p-mb-4">
              <div className="p-grid">
                <div className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3">
                  <div className="p-mx-2">
                    <label htmlFor="addPortfolioItem">
                      <i className="pi pi-plus-circle portfolioItem-add">
                      </i>
                    </label>
                    <input
                      type="file"
                      name="portfolio"
                      id="addPortfolioItem"
                      style={{ display: "none" }}
                      onChange={addPortfolio}
                      onClick={(e) => e.target.value = null}
                      accept="image/*"
                    />

                  </div>
                </div>
                {portfolioItems.map((item, index) => (
                  <span className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3" key={item.id + index}>
                    <div className="p-mx-2">
                      <img src={item.imageURL} alt="Portfolio Item" />
                      <span className="portfolioItem-icons">
                        <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[item.id].toggle(e)} />
                        <OverlayPanel ref={element => (ref.current[item.id] = element)} >
                          <div className="p-py-2 p-px-3" onClick={deletePortfolio} id={item.id}><i className="pi pi-trash p-pr-2"></i> Delete Image</div>
                        </OverlayPanel>
                      </span>
                    </div>
                  </span>
                ))}
              </div>
            </span>
            <div>
            </div>
            <ModeFooter id="portfolioEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>
  );
}

export default PortfolioEdit;