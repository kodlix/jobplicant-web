const CvCard = ({ onSelected, selected, template }) => {
    const { id, title, url, image } = template;
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