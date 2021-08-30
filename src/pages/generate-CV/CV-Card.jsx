import { useHistory} from "react-router";

const CvCard = ({ onSelected, url, selected, template }) => {
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
        </div>
    )
}

export default CvCard