import Spinner from "components/spinner/spinner.component";
import { useEffect, useReducer } from "react";
import agent from "../../services/agent.service";
import { Dialog } from "primereact/dialog"
import { viewApplicant } from "store/modules/job";
import { useDispatch, useSelector } from "react-redux";

const ViewAspirantModal = ({ showModal, onHide, jobId }) => {

    const dispatch = useDispatch();
    const applicants = useSelector(state => state.job.applicants);
    const loadingApplicants = useSelector(state => state.job.loadingApplicants)


    useEffect(() => {
        if (jobId) {
            console.log('job id', jobId)
            dispatch(viewApplicant(jobId))
        }
    }, [jobId])

    return (<Dialog
        visible={showModal}
        onHide={onHide}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "40vw" }}
    >
        <div className="modal-body">
            {loadingApplicants ? <Spinner /> : (<div>

                <h3>See Aspirants {applicants.length}</h3>
                {[1, 2, 3].map((applicant, index) => <div key={index} className="p-card mt-2">
                    <h3>Applicant name</h3>
                </div>)}
            </div>)}
        </div>
    </Dialog>)
}

export default ViewAspirantModal