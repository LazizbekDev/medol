const SlideItem = ({src, heading, p}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
                <div className={"slider-img sm-none"}>
                    <img src={src} className="max-w-lg rounded-lg slider-img-item" alt={src} />
                </div>
                <div className={"left"}>
                    <h1 className="text-5xl hero-heading">{heading}</h1>
                    <p className="py-6 hero-p">
                        {p}
                    </p>
                    <button className="btn px-12 gradient-btn rounded-full">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default SlideItem;