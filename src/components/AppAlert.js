import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from 'primereact/toast';
import './AppAlert.css';


const AppAlert = () => {
    const toast = useRef(null);
    const notification = useSelector(state => state.notification);

    useEffect(() => {
        
    }, [notification])   

    return (
        <div>
        <Toast ref={toast} />
        {notification.type === 'success' && toast.current.show({severity:'success', summary: notification.title, detail: notification.message, life: 5000})}
        {notification.type === 'error' && toast.current.show({severity:'error', summary: notification.title, detail: notification.message, life: 5000})}
        {notification.type === 'info' && toast.current.show({severity:'info', summary: notification.title, detail: notification.message, life: 5000})}
        {notification.type === 'warning' && toast.current.show({severity:'warn', summary: notification.title, detail: notification.message, life: 5000})}
        </div>
    );
}

export default AppAlert;