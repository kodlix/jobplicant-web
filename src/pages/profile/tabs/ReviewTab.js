import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadProfileInfo } from "store/modules/account";
import { loadApplicantReview, loadApplicantReviews } from "store/modules/review";


const ReviewTab = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);

    const applicantReview = useSelector(state => state.account.profileInfo);
    console.log("reviews", applicantReview);

    useEffect(() => {
        dispatch(loadProfileInfo());
    }, [dispatch])

    return (

        <>
            <div className="p-card p-4">
                <h3>Reviews</h3>
            </div>
            <div className="mt-1">
                {applicantReview?.reviews && applicantReview?.reviews.length > 0 && applicantReview?.reviews.map((review, index) =>
                    <div
                        className="p-card p-4 mt-2 d-flex justify-content-between"
                        key={index}
                    >
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
                    </div>
                )}
                {applicantReview?.reviews.length === 0 && <strong className="mx-auto text-secondary">No review found</strong>}


            </div>
        </>
    )
};

export default ReviewTab;
