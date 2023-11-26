const ServiceCard = ({src, heading, p}) => {
    return (
        <div className="card card-service w-auto bg-white mx-5">
            <figure><img src={src} alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="primary-color">{heading}</h2>
                <p className={"text-center line-clamp-4"}>{p}</p>
                <div className="card-actions mx-auto service-btn">
                    <button className="btn md:px-12 sm:px-6 mx-auto gradient-btn rounded-full">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;