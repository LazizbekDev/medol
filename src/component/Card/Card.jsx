import "./Card.css"
const Card = () => {
    const cards = [
        {src: "/slide-1@2x.png", title: 'Эндоваскулярная хирургия' },
        {src: "/endeavor.png", title: 'Лабораторная диагностика'},
        {src: "/pingwing.png", title: 'Кардиохирургия' },
        {src: "/pingwing-phone.png", title: 'Card 4'},
        {src: "/money.png", title: 'Card 5'},
        {src: "/slide-1@2x.png", title: 'Card 6'},
    ];
    return (
        <div className={"mx-auto w-full"}>
            <h1 className={"h1 my-6 primary-color hero-heading"} align={"center"}>ПРОДУКЦИЯ</h1>

            <div className="card-grid bg-white">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <figure className="md:px-10 px-5 pt-10 h-64 w-64 mx-auto">
                            <img src={card.src} alt="Shoes" className="rounded-xl p-3" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{card.title}</h2>
                            <div className="card-actions mx-auto">
                                <button className="btn md:px-12 sm:px-6 mx-auto gradient-btn rounded-full">Посмотреть все</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* eslint-disable-next-line react/no-unknown-property */}
            <a href={"/#"} align={"center"} style={{maxWidth: "19rem"}} className={"flex items-center justify-between primary-color mx-auto"}>
                <p>Перейти в каталог нашей продукции</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clipPath="url(#clip0_502_67)">
                        <path d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z" fill="#0D4C93"/>
                        <path d="M13.3966 21.6344L19.2061 15.825C19.6569 15.3718 19.6569 14.6399 19.2061 14.1867L13.3966 8.37725C12.9621 8.0043 12.3196 8.0043 11.885 8.37725C11.3982 8.79438 11.3413 9.52867 11.7584 10.0155L16.7429 15L11.7583 19.9962C11.3075 20.4493 11.3075 21.1813 11.7583 21.6344C12.2115 22.0853 12.9435 22.0853 13.3966 21.6344Z" fill="#0D4C93"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_502_67">
                            <rect width="30" height="30" fill="white" transform="translate(30) rotate(90)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    );
};

export default Card;