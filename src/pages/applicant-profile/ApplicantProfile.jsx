import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadAccountByUser } from "store/modules/account";
import { openModal } from "store/modules/modal";

import Biography from "components/profile/Biography";
import Experience from "components/profile/Experience";
import Education from "components/profile/Education";
import Skills from "components/profile/Skills";
import Hobbies from "components/profile/Hobbies";
import ProfessionsOfInterest from "components/profile/ProfessionsOfInterest";
import LocationOfInterest from "components/profile/LocationOfInterest";
import ContactInformation from "components/profile/ContactInformation";
import ModalForm from 'components/profile/ModalForm';
import agentService from 'services/agent.service';
import Spinner from 'components/spinner/spinner.component';
import { loadCountry } from 'store/modules/location';
import PersonalInfo from 'components/profile/PersonalInfo';
import { useParams } from 'react-router';
import { ACCOUNT_TYPE } from 'constants/accountType';
import { Link, } from "react-router-dom";
import { loadApplicantReviews } from 'store/modules/review';
import { formatter } from 'helpers/converter';
import Portfolio from 'components/profile/Portfolio';


const ApplicantProfile = () => {
    const applicantId = useParams().id;
    const [activeTab, setActiveTab] = useState("info");
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState(1);
    const [isShowInfo, setIsShowInfo] = useState(true);
    const [isHideReview, setIsHideReview] = useState(true);

    const applicantid = useParams().id;
    const dispatch = useDispatch();
    const loading = useSelector(state => state.account.loading);
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const applicantReview = useSelector(state => state.review.review);
    const accountType = agentService.Auth.current().accountType;

    console.log("applicantReview", applicantReview)

    const handleInfoTab = () => {
        setIsHideReview(true);
        setIsShowInfo(true);
    }

    const handleReviewTab = () => {
        setIsHideReview(false);
        setIsShowInfo(false);
    }

    const [mode, setMode] = useState("create");
    const [itemToEdit, setItemToEdit] = useState({});

    useEffect(() => {
        dispatch(loadCountry());
        dispatch(loadAccountByUser(applicantid));
        dispatch(loadApplicantReviews(applicantId, page, limit))
    }, [dispatch]);

    const openCreate = (name) => {
        setMode("create");
        setItemToEdit({});
        dispatch(openModal(name));
    };

    const openEdit = (name, data) => {
        setMode("edit");
        setItemToEdit(data);
        dispatch(openModal(name));
    };

    const formatDate = (date) => {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");

        return year + "/" + month + "/" + day;
    };
    console.log('loading', loading)
    if (loading)
        return <Spinner />

    return (
        <div className="container">
            <div className="pt-5">
                <PersonalInfo
                    openCreate={openCreate}
                    openEdit={openEdit}
                    data={profileInfo}
                />
                <div className="p-grid">
                    <div className="p-col-9 content-smallscreen">
                        <div className="content-tab">
                            <div className="p-d-inline-flex">
                                <Link onClick={() => { setActiveTab("info"); handleInfoTab() }}>
                                    <i
                                        className={`pi pi-info-circle ${activeTab === "info" && "pi-active"
                                            }`}
                                    ></i>
                                    <div className="tab-titles pi-active">Info</div>
                                </Link>

                                <Link onClick={() => { setActiveTab("review"); handleReviewTab() }}>
                                    <i
                                        className={`pi pi-star ${activeTab === "review" && "pi-active"}`}
                                    ></i>
                                    <div className={`tab-titles`}>Reviews</div>
                                </Link>
                            </div>
                        </div>

                        <div className="content-body" hidden={!isShowInfo}>
                            <Biography
                                openCreate={openCreate}
                                openEdit={openEdit}
                                profileInfo={profileInfo}
                            />

                            <div className="p-grid">
                                <div className="p-col-12 p-md-8 content-leftPanel">
                                    <Experience
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        formatDate={formatDate}
                                        hide={true}
                                    />
                                    <Education
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        formatDate={formatDate}
                                    />
                                </div>
                                <div className="p-col-12 content-rightPanel p-md-4">
                                    <ContactInformation
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                    />
                                    <Skills
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                    />
                                    {accountType !== ACCOUNT_TYPE.ARTISAN && <Hobbies
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                    />}
                                    {accountType !== ACCOUNT_TYPE.ARTISAN && <ProfessionsOfInterest
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                    />}
                                    <LocationOfInterest
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                    />

                                </div>
                            </div>
                            <ModalForm data={profileInfo} mode={mode} itemToEdit={itemToEdit} />
                        </div>
                        {/* review tab. */}
                        <div className="pt-2" hidden={isHideReview}>
                            <div className="p-card p-4 ">
                                <h3>Reviews</h3>
                            </div>
                            <div className="mt-1 mb-3">
                                {applicantReview.data && applicantReview.data.length > 0 && applicantReview.data.map((review, index) => (
                                    <div className="p-card p-4 mt-2 d-flex justify-content-between" key={index} >
                                        <div className="d-flex">
                                            <div className="d-col text-center">
                                                <div>
                                                    <p>{review?.reviewerName}</p>
                                                </div>
                                                <img
                                                    src="https://source.unsplash.com/random/50x50"
                                                    className="rounded circle"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="p-2"></div>
                                            <div>
                                                <ul>
                                                    <li className="d-flex flex-column">
                                                        <p className="p-1">{ }</p>
                                                        <span>
                                                            <div
                                                                className="stars"
                                                                style={{ "--rating": review?.rating }}
                                                            ></div>
                                                        </span>
                                                    </li>

                                                    <li className="d-flex">{review?.title}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex-column-reverse">
                                            <p>{formatter.toDate(review.createdAt)}</p>
                                        </div>
                                    </div>
                                ))}
                                {applicantReview.length === 0 && <strong className="mx-auto text-secondary">No review found</strong>}
                            </div>
                        </div>
                    </div>
                    {accountType === ACCOUNT_TYPE.ARTISAN && <Portfolio openCreate={openCreate} openEdit={openEdit} />}

                </div>
            </div>
        </div>
    );
}

export default ApplicantProfile;