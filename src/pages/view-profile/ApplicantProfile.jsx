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
import { useHistory, useParams } from 'react-router';
import { ACCOUNT_TYPE } from 'constants/accountType';
import { loadApplicantReviews } from 'store/modules/review';
import { formatter } from 'helpers/converter';
import Portfolio from 'components/profile/Portfolio';
import { Button } from 'primereact/button';
import "./ApplicantProfile.css"
import moment from 'moment';
import PersonalInfoSkeleton from 'components/skeletons/PersonalInfoSkeleton';
import ExperienceSkeleton from 'components/skeletons/ExperienceSkeleton';
import EducationSkeleton from 'components/skeletons/EducationSkeleton';
import ContactInfoSkeleton from 'components/skeletons/ContactInfoSkeleton';
import SkillSkeleton from 'components/skeletons/SkillSkeleton';
import HobbiesSkeleton from 'components/skeletons/HobbiesSkeleton';
import ProfessionOfInterestSkeleton from 'components/skeletons/ProfessionOfInterestSkeleton';
import LocationOfInterestSkeleton from 'components/skeletons/LocationOfInterestSkeleton';
import BiographySkeleton from 'components/skeletons/BiographySkeleton';

// const ApplicantContext  = useContext(false);

const ApplicantProfile = () => {
    const applicantId = useParams().id;
    const [activeTab, setActiveTab] = useState("info");
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState(1);
    const [isShowInfo, setIsShowInfo] = useState(true);
    const [isHideReview, setIsHideReview] = useState(true);

    const dispatch = useDispatch();
    const loading = useSelector(state => state.account.loading);
    // const loading = useSelector(state => state.account.loading);
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const applicantReview = useSelector(state => state.review.review);
    const accountType = agentService.Auth.current().accountType;


    const history = useHistory();

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
        dispatch(loadCountry())
        dispatch(loadAccountByUser(applicantId));
        dispatch(loadApplicantReviews(applicantId, page, limit));
    }, []);

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
    // if (loading)
    // return <Spinner />

    //     return <Spinner />

    return (
        <div className="container">
            <div className="pt-5">
                <div className="d-flex justify-content-lg-between">
                    {loading ? <PersonalInfoSkeleton /> : <PersonalInfo
                        openCreate={openCreate}
                        openEdit={openEdit}
                        data={profileInfo}
                        isViewApplicant={true}

                    />}
                    <div className="flex-shrink-0">
                        <Button onClick={() => history.goBack()} className="bk-btn p-pt-2 app-color"><i className="pi pi-arrow-left text-white">  Back</i></Button>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col-9 content-smallscreen">
                        <div className="content-tab">
                            <div className="p-d-inline-flex m-2">
                                <div onClick={() => { setActiveTab("info"); handleInfoTab() }} className="text-center pointer">
                                    <i
                                        className={`pi pi-info-circle ${activeTab === "info" && "pi-active"
                                            }`}
                                    ></i>
                                    <div className="tab-titles pi-active">Info</div>
                                </div>

                                <div onClick={() => { setActiveTab("review"); handleReviewTab() }} className="text-center pointer">
                                    <i
                                        className={`pi pi-star ${activeTab === "review" && "pi-active"}`}
                                    ></i>
                                    <div className={`tab-titles`}>Reviews</div>
                                </div>
                            </div>
                        </div>

                        <div className="content-body" hidden={!isShowInfo}>
                            {loading ? <BiographySkeleton /> : <Biography
                                openCreate={openCreate}
                                openEdit={openEdit}
                                profileInfo={profileInfo}
                                isViewApplicant={true}
                            />}

                            <div className="p-grid">
                                <div className="p-col-12 p-md-8 content-leftPanel">
                                    {loading ? <ExperienceSkeleton /> : <Experience
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        formatDate={formatDate}
                                        isViewApplicant={true}

                                    />}
                                    {loading ? <EducationSkeleton /> : <Education
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        formatDate={formatDate}
                                        isViewApplicant={true}

                                    />}
                                </div>
                                <div className="p-col-12 content-rightPanel p-md-4">
                                    {loading ? <ContactInfoSkeleton /> : <ContactInformation
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        isViewApplicant={true}

                                    />}
                                    {loading ? <SkillSkeleton /> : <Skills
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        isViewApplicant={true}
                                    />}
                                    {accountType !== ACCOUNT_TYPE.ARTISAN && loading ? <HobbiesSkeleton /> : <Hobbies
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        isViewApplicant={true}
                                    />}
                                    {accountType !== ACCOUNT_TYPE.ARTISAN && loading ? <ProfessionOfInterestSkeleton /> : <ProfessionsOfInterest
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        isViewApplicant={true}
                                    />}
                                    {loading ? <LocationOfInterestSkeleton /> : <LocationOfInterest
                                        openCreate={openCreate}
                                        openEdit={openEdit}
                                        profileInfo={profileInfo}
                                        isViewApplicant={true}
                                    />}

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
                                                    <p>{review?.reviewerDisplayName}</p>
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
                                                    <li className="d-flex text-capitalize text-center app-color font-weight-bold">{review?.title}</li>
                                                    <li className="d-flex flex-column">
                                                        <p className="p-1">{ }</p>
                                                        <span>
                                                            <div
                                                                className="stars"
                                                                style={{ "--rating": review?.rating }}
                                                            ></div>
                                                        </span>
                                                    </li>

                                                    <li className="d-flex">{review?.detail}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex-column-reverse">
                                            <p className="align-right">{moment(review?.createdAt).format('MMMM DD, YYYY')}</p>
                                        </div>
                                    </div>
                                ))}
                                {applicantReview.length === 0 && <strong className="mx-auto text-secondary">No review found</strong>}
                            </div>
                        </div>
                    </div>
                    {accountType === ACCOUNT_TYPE.ARTISAN && <Portfolio openCreate={openCreate}
                        openEdit={openEdit}
                        isViewApplicant={true}
                    />}

                </div>
            </div>
        </div>

    );
}

export default ApplicantProfile;