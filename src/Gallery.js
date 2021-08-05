import ImageCard from "./ImageCard";

function Gallery(props) {
    const { data } = props
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {data.length} images
            </div>
            <ul class="list-inline">
                {
                    data.map(e => {
                        return (
                            <li class="list-inline-item">
                                <ImageCard
                                    id={e.id}
                                    Label={e.Label}
                                    LatinName={e.LatinName}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Gallery