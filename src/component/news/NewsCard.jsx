import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({src, link, date, p, slug}) => {
    return (
        <div className="card -mb-24 w-auto news-card">
            <figure className="px-10 news-image-wrapper">
                <img src={src} alt="Shoes" className="rounded-xl news-image" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">
                    <Link to={slug}>
                        {link}
                    </Link>
                </h3>
                <h2>{date}</h2>
                <p className={"line-clamp-5"}>{p}</p>
                <div className="card-actions">
                    <button className="btn w-full sm:w-max md:px-12 sm:px-6 mx-auto gradient-btn rounded-full">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;