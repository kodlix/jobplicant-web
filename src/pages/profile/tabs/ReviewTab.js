import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadApplicantReviews } from "store/modules/review";



const reviews = [
    {
        name: "Annonymous",
        service: "Dry-cleaners",
        ratings: 3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
        name: "Annonymous",
        service: "Janitor",
        ratings: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Annonymous",
        service: "Dry-cleaners",
        ratings: 4.5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit..  ",
    },

];

const ReviewTab = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);

    const applicantReview = useSelector(state => state.review.review)

    useEffect(() => {
        dispatch(loadApplicantReviews(page, limit))
    }, [dispatch])

    return (

        <>
            <div className="p-card p-4">
                <h3>Reviews</h3>
            </div>
            <div className="mt-1">
                {reviews.map(({ name, ratings, service, review }, index) => (
                    <div
                        className="p-card p-4 mt-2 d-flex justify-content-between"
                        key={index}
                    >
                        <div className="d-flex">
                            <div className="d-col text-center">
                                <div>
                                    <p>{name}</p>
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
                                        <p className="p-1">{service}</p>
                                        <span>
                                            <div
                                                className="stars"
                                                style={{ "--rating": ratings }}
                                            ></div>
                                        </span>
                                    </li>

                                    <li className="d-flex">{review}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default ReviewTab;
