export default function Entry(props) {
    return (
        <article className="JEntry">
            
            <div className="img-container">
                <img
                    className="main-img"
                    src={props.img}
                />
            </div>

            <div className="entry-info">
                <img className="marker" src="/marker.png" />
                <span className="country">{props.country}</span>
                <a href={props.location} target="blank">
                    View on Google Map
                </a>

                <h2 className="entry-title">{props.name}</h2>

                <p className="entry-date">
                   {props.date}
                </p>

                <p className="entry-text">
                   {props.etext}
                </p>
            </div>

        </article>
    );
}
