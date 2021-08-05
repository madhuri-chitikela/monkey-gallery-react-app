function ImageCard(props) {
    const { id, Label, LatinName } = props
    const imgPath = `http://localhost:5000/training/training/${Label}/${id}`
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgPath} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{LatinName}</p>
            </div>
        </div>
    )
}
export default ImageCard;