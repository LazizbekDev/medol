import Header from "../Header.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={"bg-white"}>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <div className="footer-container">
                <div className="sm:px-6 py-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 px-2">
                    <div className="grid row-gap-10 mb-8 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <span className="text-base font-bold text-black text-lg">
                              Контакты
                            </span>
                            <div>
                                <ul className="mt-2 space-y-2">
                                    <div className={"items-center w-full flex pointer"}>
                                        <div className={"bg-white rounded-full p-2 mr-2 footer-items"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.554 15.2497 21.554 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98818 13.6093 7.94472 11.5658 7.94472 9.054C7.94472 6.54219 9.98823 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z" fill="#0D4C93"/>
                                            </svg>
                                        </div>
                                        <p className={'w-6/12 footer-item'}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
                                    </div>
                                    <li>
                                        <div className={"items-center w-full flex pointer footer-item"}>
                                            <div className={"bg-white rounded-full p-2 mr-2"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                    <g clipPath="url(#clip0_502_285)">
                                                        <path d="M20.9785 2.74023H2.02149C1.71031 2.74023 1.41899 2.81674 1.15544 2.94283L11.4551 13.2425L13.7636 11.0239C13.7636 11.0239 13.7637 11.0237 13.7638 11.0236C13.7638 11.0235 13.764 11.0234 13.764 11.0234L21.8449 2.94301C21.5813 2.81683 21.2898 2.74023 20.9785 2.74023Z" fill="#0D4C93"/>
                                                        <path d="M22.7977 3.896L15.1932 11.5001L22.7974 19.1043C22.9235 18.8408 23 18.5495 23 18.2383V4.76173C23 4.45074 22.9237 4.15946 22.7977 3.896Z" fill="#0D4C93"/>
                                                        <path d="M0.202598 3.89551C0.076502 4.15906 0 4.45038 0 4.76156V18.2381C0 18.5491 0.0764121 18.8405 0.202418 19.1039L7.80693 11.4998L0.202598 3.89551Z" fill="#0D4C93"/>
                                                        <path d="M14.2403 12.4532L11.9315 14.672C11.7999 14.8037 11.6275 14.8695 11.4551 14.8695C11.2828 14.8695 11.1103 14.8037 10.9787 14.672L8.75977 12.4531L1.15512 20.0573C1.41873 20.1835 1.71022 20.2601 2.02149 20.2601H20.9785C21.2897 20.2601 21.581 20.1836 21.8446 20.0575L14.2403 12.4532Z" fill="#0D4C93"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_502_285">
                                                            <rect width="23" height="23" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <p className={'w-full'}>
                                                <a href={"mailto:info@medol.uz"}><p>info@medol.uz</p></a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className={"items-center w-full flex pointer"}>
                                    <div className={"bg-white rounded-full p-2 mr-2"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <g clipPath="url(#clip0_606_117)">
                                                <path d="M9.10996 12.8901C7.0101 10.7902 6.53596 8.69037 6.429 7.84906C6.39911 7.61643 6.47916 7.38315 6.64558 7.21789L8.34489 5.51933C8.59486 5.26952 8.63922 4.88019 8.45186 4.58054L5.74624 0.3793C5.53895 0.0474982 5.11334 -0.0722526 4.76345 0.102783L0.419964 2.1484C0.13702 2.28773 -0.0294028 2.58835 0.00272223 2.90209C0.230308 5.06416 1.17289 10.3791 6.396 15.6025C11.6191 20.826 16.9332 21.7682 19.0964 21.9958C19.4102 22.0279 19.7108 21.8615 19.8501 21.5786L21.8958 17.2351C22.0701 16.886 21.9512 16.4615 21.6208 16.2538L17.4195 13.549C17.12 13.3614 16.7307 13.4054 16.4807 13.6552L14.7822 15.3545C14.6169 15.5209 14.3836 15.6009 14.151 15.5711C13.3097 15.4641 11.2098 14.99 9.10996 12.8901Z" fill="#0D4C93"/>
                                                <path d="M17.4484 11.7586C17.0294 11.7586 16.6897 11.419 16.6897 11C16.6862 7.85915 14.1409 5.31388 11.0001 5.31033C10.5811 5.31033 10.2415 4.97069 10.2415 4.55171C10.2415 4.13274 10.5811 3.79309 11.0001 3.79309C14.9785 3.79748 18.2026 7.02155 18.207 11C18.207 11.419 17.8673 11.7586 17.4484 11.7586Z" fill="#0D4C93"/>
                                                <path d="M21.2415 11.7586C20.8225 11.7586 20.4828 11.419 20.4828 11C20.477 5.76524 16.2348 1.52309 11.0001 1.51724C10.5811 1.51724 10.2415 1.1776 10.2415 0.758621C10.2415 0.339646 10.5811 0 11.0001 0C17.0724 0.00668947 21.9934 4.92764 22.0001 11C22.0001 11.2012 21.9202 11.3942 21.7779 11.5364C21.6356 11.6787 21.4427 11.7586 21.2415 11.7586Z" fill="#0D4C93"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_606_117">
                                                    <rect width="22" height="22" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className={'w-full'}>
                                        <a href={"tel:+998 71 276-62-55"}><p>+998 71 276-62-55</p></a>
                                        <a href={"tel:+998 71 276-62-54"}><p>+998 71 276-62-54</p></a>
                                    </p>
                                </div>
                                <ul className="mt-2 space-y-2">
                                    <button className="btn w-full md:px-12 sm:px-6 mx-auto gradient-btn footer-btn rounded-full">Оставить</button>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-black text-lg">
                                    О компании
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                        >
                                            История
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                        >
                                            Партнеры
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                        >
                                            Вакансии
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:max-w-md lg:col-span-1">
                            <span className="text-base font-bold text-black text-lg">
                              Продукция
                            </span>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Эндоваскулярная хирургия
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Аритмология
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Кардиохирургия
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Лабораторная диагностика
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Хирургия
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:max-w-md lg:col-span-1">
                            <span className="text-base font-bold text-black text-lg">
                              Услуги
                            </span>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Сервис
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Регистрации
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                                    >
                                        Услуги логистики
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:max-w-md lg:col-span-3 flex items-center sm:flex-rowflex-col">
                            <img src={"/logo-1@2x.png"} alt={""} width={140} className={"sm-none mt-5"} />
                            <p className={"ml-4 footer-p"}>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную
                                пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between pt-5 pb-10 sm:flex-row">
                        <p className="text-sm text-black">
                            &copy; 2021 ООО «Medical Online Services»
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            Сайт разработан компанией www
                            <a href="/" className="transition-colors duration-300 underline text-cyan-500 hover:text-teal-accent-400">.uz</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;