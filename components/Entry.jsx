export default function Entry() {
    return (
        <article className="JEntry">
            
            <div className="img-container">
                <img
                    className="main-img"
                    src="https://scrimba.com/links/travel-journal-japan-image-url"
                />
            </div>

            <div className="entry-info">
                <img className="marker" src="/marker.png" />
                <span className="country">Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji">
                    View on Google Map
                </a>

                <h2 className="entry-title">Mount Fuji</h2>

                <p className="entry-date">
                    12 Jan, 2023 – 24 Jan, 2023
                </p>

                <p className="entry-text">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>

        </article>
    );
}
