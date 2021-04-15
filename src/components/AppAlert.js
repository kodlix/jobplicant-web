import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AppAlert.css';
import { clearMessage } from '../store/modules/notification';


const AppAlert = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    console.log(notification);

    const clearError = () => {
        dispatch(clearMessage());
    }

    return (
        <>
            <div className="Alert font-weight-bold text-left">
                {(notification.error || notification.success || notification.warning || notification.info) && <div className="bg-gray">
                    {notification.error && <div className="row alert alert-error text-danger alert-dismissible fade show pb-2 mb-0" role="alert">
                        <span className="col-1 px-1 py-1 my-auto">
                            <i className="fas fa-exclamation-circle text-danger bg-light rounded-circle" style={{ fontSize: "2rem" }}></i>
                            {/* <i className=""></i> */}
                        </span>
                        <span className="col-10 text-wrap ml-1 my-auto">
                            {notification.error}
                        </span >
                        <button className="close my-auto" type="button" aria-label="Close" onClick={clearError}>×</button>
                    </div>
                    }
                    {notification.success && <div className="row alert alert-success text-success alert-dismissible fade show pb-2 mb-0" role="alert">
                        <span className="col-1 px-1 py-1 my-auto">
                            <i className="fas fa-check-circle text-success bg-light rounded-circle" style={{ fontSize: "2rem" }}></i>
                        </span>
                        <span className="col-10 text-wrap ml-1 my-auto">
                            {notification.success}
                        </span>
                        <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true" onClick={clearError}>×</span>
                        </button>
                    </div>
                    }
                    {notification.warning && <div className="row alert alert-warning text-warning alert-dismissible fade show pb-2 mb-0" role="alert">
                        <span className="col-1 px-1 py-1 my-auto">
                            <i className="fas fa-exclamation-triangle text-warning bg-light rounded-circle" style={{ fontSize: "2rem" }}></i>
                        </span>
                        <span className="col-10 text-wrap ml-1 my-auto">
                            {notification.warning}
                        </span>
                        <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true" onClick={clearError}>×</span>
                        </button>
                    </div>
                    }
                    {notification.info && <div className="row alert alert-info text-info alert-dismissible fade show pb-2 mb-0" role="alert">
                        <span className="col-1 px-1 py-1 my-auto">
                            <i className="fas fa-info-circle text-info bg-light rounded-circle" style={{ fontSize: "2rem" }}></i>
                        </span>
                        <span className="col-10 text-wrap ml-1 my-auto">
                            {notification.info}
                        </span>
                        <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true" onClick={clearError}>×</span>
                        </button>
                    </div>
                    }
                </div>}
            </div>
        </>
        // info-error

    );
}

export default AppAlert;