import { useHistory } from "react-router";
import { Button } from 'primereact/button';
import './cv-card.css'

const buttonStyle = { 
    border: 'none', 
    outline: 'none', 
    borderRadius: '4px', 
    color: 'white', 
    fontSize: '12px', 
    padding: '4px', 
    backgroundColor: '#5A2846', 
    margin: '10px' 
}

const CvCard = ({ onSelected, url, selected, template, setShowPreview }) => {
    const history = useHistory();

    const { id, title, image } = template;

    // const handleNavigation = (url) => {
    //     history.push(url)
    // }
    return (
        <div className={`card template-card ${selected === id ? 'selected' : ''}`} onClick={() => onSelected(id, template)}>

            <div className="card-body p-2">
                <p className="p-pt-2 font-weight-bold">{title}</p>
                <img src={image} style={{ width: '100%' }} alt="Template-1" />
            </div>
            <div style={{ position: 'absolute', bottom: 10, zIndex: 100 }} className="text-center">
                <button disabled={selected !== id} label="Generate" className="" onClick={() => setShowPreview(true)} style={buttonStyle}>Generate</button>
            </div>
        </div>
    )
}

export default CvCard