import Spinner from "components/spinner/spinner.component";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadJobs } from "store/modules/job";

const { default: CorporateJob } = require("components/CorporateJob")

const CompanyJob = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.job.jobs);
    const loading = useSelector(state => state.job.loading)

    useEffect(() => {
        dispatch(loadJobs())
    }, [])

    if(loading)
        return <Spinner />

    return <div className="mt-3">
        <CorporateJob jobs={jobs} />
    </div>
}

export default CompanyJob