import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { Toast } from "primereact/toast";
import SectionHeader from "./SectionHeader";
import ModeFooter from "./ModeFooter";
import { updateProfilePortfolio } from "store/modules/account";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const PortfolioForm = ({ data, closeEditMode }) => {
  const { handleSubmit } = useForm();
  const toast = useRef(null);
  const ref = useRef({});
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const loading = useSelector((state) => state.account.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.length > 0) {
      setPortfolioItems(data);
    }
    
  }, []);

  const deletePortfolio = (e) => {
    const newPortfolioArray = portfolioItems.filter(
      (item) => item !== e.target.id
    );
    setPortfolioItems(newPortfolioArray);
  };


  const addPortfolio = (e) => {
    if (portfolioItems.length >= 10) {
     alert("Maximum number images exceeded");
      return;
    }

    if (e.target.files.length) {
      const file = e.target.files[0];
      const preview = URL.createObjectURL(e.target.files[0]);
      const newPortfolioArray = [...portfolioItems];
      newPortfolioArray.unshift({
        id: "portfolio" + (portfolioItems.length + 1),
        imageURL: preview,
      });
      setPortfolioItems(newPortfolioArray.map(p => p.imageURL));

      setSelectedFiles([...selectedFiles, file]);
    }
  };

  const componentStatus = { portfolio: "add" };
  if (data?.length > 0) {
    componentStatus.portfolio = "edit";
  }

  const portfolioSubmit = () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      const extension = file.type.replace(/(.*)\//g, "");
      const filename = `${uuidv4()}.${extension}`;
      console.log(filename);
      formData.append("image", file, filename);
    });
    dispatch(updateProfilePortfolio(formData));
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <Toast ref={toast} />
        <SectionHeader
          componentStatus={componentStatus}
          icon="images"
          sectionTitle="Portfolio"
        />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(portfolioSubmit)}>
            <span className="width-100 p-mb-4">
              <div className="p-grid">
                <div className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3">
                  <div className="p-mx-2">
                    <label htmlFor="addPortfolioItem">
                      <i className="pi pi-plus-circle portfolioItem-add"></i>
                    </label>
                    <input
                      type="file"
                      name="portfolio"
                      id="addPortfolioItem"
                      style={{ display: "none" }}
                      onChange={addPortfolio}
                      onClick={(e) => (e.target.value = null)}
                      accept="image/*"
                    />
                  </div>
                </div>
                {portfolioItems.length > 0 &&
                  portfolioItems.map((item, index) => (
                    <span
                      className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3"
                      key={index}
                    > 
                      <div className="p-mx-2">
                        <img src={item} alt="Portfolio Item" />
                        <span className="portfolioItem-icons">
                          <Button
                            type="button"
                            icon="pi pi-ellipsis-h"
                            onClick={(e) => ref.current[item].toggle(e)}
                          />
                          <OverlayPanel
                            ref={(element) => (ref.current[item] = element)}
                          >
                            <div
                              className="p-py-2 p-px-3"
                              onClick={deletePortfolio}
                              id={item}
                            >
                              <i className="pi pi-trash p-pr-2"></i> Delete
                              Image
                            </div>
                          </OverlayPanel>
                        </span>
                      </div>
                    </span>
                  ))}
              </div>
            </span>
            <div></div>
            <ModeFooter
              loading={loading}
              id="portfolioEdit"
              onCancel={closeEditMode}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PortfolioForm;
