import React, {useState, useEffect} from 'react';
import { useSelector}  from 'react-redux';
import { Dialog } from 'primereact/dialog';
import BiographyForm from './BiographyForm';
import Experience from './Experience';
import {PROFILE} from 'constants/profile';

import './ModalForm.css';

const ModalForm = ({data, mode}) => {
    const modalName = useSelector(state => state.modal.name);
    const [name, setName] = useState("");
  

  useEffect(() => {
      setName(modalName);
  }, [modalName])
  
    return ( 
        <Dialog  visible={name} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}}>
            {name === PROFILE.BIOGRAPHY && <BiographyForm  data={data.biography} mode={mode} />}
            {name === PROFILE.EXPERIENCE && <Experience  data={data.experiences} mode={mode}/>}
        </Dialog>
     );
}
 
export default ModalForm;  