import moment from "moment";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "store/modules/account";
import { updateCompanyInfo } from "store/modules/company";
import { loadCountry, loadLga, loadStates } from "store/modules/location";
import JobplicantAvatar from "components/profile/jobplicant-avatar";
import Spinner from 'components/spinner/spinner.component';
import { useHistory, useParams } from "react-router";
import { loadApplicantReviews } from "store/modules/review";
import "./ApplicantProfile.css"



const ViewCompanyProfile = () => {
    const [loading, setLoading] = useState(false);
    const uploading = useSelector((state) => state.account.loading);
    const id = useSelector((state) => state.account.profileInfo.id);
    const profileInfo = useSelector(state => state.account.profileInfo);
    const applicantReview = useSelector(state => state.review.review);

    const dispatch = useDispatch();
    const countries = useSelector(state => state.location.countries);
    const states = useSelector(state => state.location.states);
    const lgas = useSelector(state => state.location.lgas);
    const [companyInfo, setCompanyInfo] = useState({});

    const [selectedFile, setSelectedFile] = useState(null);
    const [isHideReview, setIsHideReview] = useState(true);
    const [isShowInfo, setIsShowInfo] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);

    const applicantid = useParams().id;

    const [preview, setPreview] = useState(null);
    const [editMode, setEditMode] = useState(true);
    const [activeTab, setActiveTab] = useState("info");

    const history = useHistory();

    console.log('company button loading', loading)

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "all",
    });

    const handleInfoTab = () => {
        setIsHideReview(true);
        setIsShowInfo(true);
    }
    const handleReviewTab = () => {
        setIsHideReview(false);
        setIsShowInfo(false);
    }

    useEffect(() => {
        setLoading(true);
        dispatch(loadCountry());
        dispatch(loadStates(1));
        dispatch(loadLga(1))
        setCompanyInfo({
            ...companyInfo,
            yearOfEstablishment: new Date(profileInfo.yearOfEstablishment),
            companyName: profileInfo.companyName,

            // country: companyInfo.country,
            // state: companyInfo.state.name,
            // lga: companyInfo.lga,
            // lgaId: companyInfo.lga.id,
            // lgaName: companyInfo.lga.name,
            city: profileInfo.city,
            noOfEmployees: profileInfo.noOfEmployees,
            phoneNumber: profileInfo.contactPhoneNumber,
            website: profileInfo.website,
            address: profileInfo.address
        });

        setValue("companyName", profileInfo.companyName);
        setValue("yearOfEstablishment", profileInfo.yearOfEstablishment);
        setValue('phoneNumber', profileInfo.contactPhoneNumber);
        setValue('website', profileInfo.website);

        setValue('city', profileInfo.city);
        setValue('noOfEmployees', profileInfo.noOfEmployees);
        setValue('address', profileInfo.address);
        setLoading(false)

    }, [dispatch, profileInfo]);


    useEffect(() => {
        dispatch(loadApplicantReviews(applicantid, page, limit));
    }, [dispatch, applicantid]);
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile, uploading]);

    useEffect(() => {
        if (countries) {
            setCompanyInfo({
                ...companyInfo,
                country: countries.find(country => country.id === 1),
                state: states.find(state => state.id === 1),
                lga: lgas.find(lga => lga.id === 1),
            })
        }
    }, [countries])

    const uploadProfilePicture = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        let selectedFile = e.target.files[0];

        setSelectedFile(selectedFile);
        setTimeout(() => {
            const confirmation = window.confirm(
                "Do you want to upload this image as company logo?"
            );

            if (confirmation) {
                console.log(selectedFile);
                var formData = new FormData();
                var extension = selectedFile.type.replace(/(.*)\//g, "");
                let filename = `${id}.${extension}`;
                // console.log(filename)
                formData.append("image", selectedFile, filename);
                //   //dispatch to the service
                dispatch(updateProfilePicture(formData));

                return;
            }
        }, 2000);
    }

    if (loading)
        return <Spinner />

    return (
        <div className="container">
            <div className="pt-5">
                <div className="">

                    <div className="d-flex flex-row-reverse py-3">
                        <Button onClick={() => history.goBack()} className="bk-btn p-pt-2 app-color" ><i className="pi pi-arrow-left text-white">  Back</i></Button>
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
                            <div className="card bg-white">
                                <div className="container">
                                    <form>
                                        <div className="p-4">

                                            <div className="p-2"></div>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="p-field p-col-6 p-md-6">
                                                            <label className="inputLabel" htmlFor="course">
                                                                Company's Name
                                                            </label>
                                                            <p className="pi-text">{profileInfo.companyName}</p>
                                                        </div>

                                                        <div className="p-field p-col-6 p-md-6">
                                                            <label className="inputLabel" htmlFor="course">
                                                                Year Of Establishment

                                                            </label>
                                                            <p className="pi-text">{moment(profileInfo.yearOfEstablishment).format('yyyy')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="p-field p-col-6 p-md-6">
                                                            <label className="inputLabel" htmlFor="course">
                                                                Phone Number<span className="text-red">*</span>

                                                            </label>
                                                            <p className="pi-text">{profileInfo.contactPhoneNumber}</p>
                                                        </div>

                                                        <div className="p-field p-col-6 p-md-6">
                                                            <label className="inputLabel" htmlFor="course">
                                                                Website

                                                            </label>
                                                            <p className="pi-text">{profileInfo.website}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center p-mt-4">

                                                    <span className="profilePic-container">

                                                        <JobplicantAvatar
                                                            width={165}
                                                            height={165}
                                                            preview={preview}
                                                            data={profileInfo}
                                                            isProfileView={true}
                                                        />
                                                        <label className="profilePic-label" htmlFor="upload-button">
                                                            {uploading && (
                                                                <i className="pi pi-spin pi-spinner" style={{ color: "black" }}>
                                                                    {" "}
                                                                </i>
                                                            )}
                                                        </label>
                                                    </span>
                                                    <input type="hidden" name="logo" register="true" value={companyInfo.logo} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        Country<span className="text-red">*</span>

                                                    </label>

                                                    <p className="pi-text">{companyInfo.country && companyInfo.country.name}</p>

                                                </div>
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        State<span className="text-red">*</span>

                                                    </label>
                                                    <p className="pi-text">{companyInfo.state && companyInfo.state.name}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        LGA<span className="text-red">*</span>

                                                    </label>

                                                    <p className="pi-text">{companyInfo.lga && companyInfo.lga.name}</p>
                                                </div>
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        City<span className="text-red">*</span>

                                                    </label>
                                                    <p className="pi pi-text">{profileInfo.city}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        Address<span className="text-red">*</span>

                                                    </label>
                                                    <p className="pi pi-text">{profileInfo.address}</p>
                                                </div>
                                                <div className="p-field p-col-6 p-md-6">
                                                    <label className="inputLabel" htmlFor="course">
                                                        Number of Employees<span className="text-red">*</span>

                                                    </label>
                                                    <p className="pi pi-text">{profileInfo.noOfEmployees}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pb-4"></div>
                                    </form>
                                </div>
                            </div>




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
                </div>
            </div>
        </div>

    );
}

export default ViewCompanyProfile;