import {useEffect, useState} from "react";
import CustomCarousel from "./assets/Carousel.jsx";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const [setSticky] = useState(false);
    const [opened, setOpened] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const path = useLocation();

    const openHandler = () => {
        setOpened((prevState) => !prevState);
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

        // eslint-disable-next-line no-unreachable
        const handleScroll = () => {
            // Determine the scroll position
            const scrollPosition = window.scrollY;

            // Set the state to determine whether the navbar should be sticky
            setSticky(scrollPosition > 80);
        };

        // Attach the scroll event listener
        // eslint-disable-next-line no-unreachable
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="text-gray-900 header" style={{height: path.pathname === "/" ? "100vh" : "25vh"}}>
            <nav className="container mx-auto lg:px-6 px-1 py-4">
                <div className="flex md:items-center justify-between">
                    <div className="hidden lg:flex flex-1 items-center justify-between">
                        <div className="flex items-center space-x-10">
                            <div className={"items-center w-full flex pointer"}>
                                <div className={"bg-white rounded-full p-2 mr-2"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.554 15.2497 21.554 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98818 13.6093 7.94472 11.5658 7.94472 9.054C7.94472 6.54219 9.98823 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z" fill="#0D4C93"/>
                                    </svg>
                                </div>
                                <p className={'w-6/12'}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
                            </div>

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

                        </div>
                    </div>

                    <div className={"lg:flex-1"}>
                        <img src={"/logo-1@2x.png"} className={"ml-0 lg:m-auto logo"}  alt={" "}/>
                    </div>

                    <div className="flex lg:flex-1 flex-initial w-36 topbar-mobile items-center space-x-10 justify-end">

                        <div className={"flex justify-between topbar-icon-block"}>
                            <div className={"bg-white lg:hidden rounded-full p-3 sm-none"}>
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

                            <div className={"bg-white lg:hidden rounded-full p-3 xs-none"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.554 15.2497 21.554 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98818 13.6093 7.94472 11.5658 7.94472 9.054C7.94472 6.54219 9.98823 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z" fill="#0D4C93"/>
                                </svg>
                            </div>

                            <div className="bg-white btn btn-circle text-black border-none hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z" fill="#0D4C93"/>
                                    <path d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z" fill="#0D4C93"/>
                                </svg>
                            </div>
                            <button className="bg-white btn rounded-full border-none hover:bg-gray-200 text-black sm-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M12.7037 22V11.9655H16.0706L16.5757 8.05372H12.7037V5.55662C12.7037 4.42442 13.0169 3.65284 14.6423 3.65284L16.712 3.65199V0.153153C16.354 0.10664 15.1254 0 13.6954 0C10.7094 0 8.66505 1.82266 8.66505 5.1692V8.05372H5.28802V11.9655H8.66505V22H12.7037Z" fill="#0D4C93"/>
                                </svg>
                                <span>Мы на Facebook</span>
                            </button>

                            <details className="dropdown dropdown-end">
                                <summary className="mb-1 btn bg-white rounded-full overflow-hidden border-none text-black hover:bg-gray-100">
                                    <div className={"flex items-center"}>
                                        <img src={"/ru.png"} alt={"ru"} className={'w-8 rounded-full'}/>
                                        <span>Русский</span>
                                    </div>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white text-black rounded-box w-52">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <li><a>
                                        <img src={"/uz.webp"} alt={""} className={'w-8 h-8 rounded-full'}/>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        <span>O'zbekcha</span>
                                    </a></li>
                                </ul>
                            </details>

                            {screenWidth < 573 && (
                                <div className="md:hidden" style={{zIndex: 999}}>
                                    <label className="btn btn-circle bg-white border-none hover:bg-gray-200 swap swap-rotate">

                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox" onChange={openHandler} />

                                        {/* hamburger icon */}
                                        <svg className="swap-off fill-current ml-1.5" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                            <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H17.5C18.3284 3 19 2.32843 19 1.5C19 0.671573 18.3284 0 17.5 0H1.5Z" fill="#0D4C93"/>
                                            <path d="M1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8H11.5C12.3284 8 13 7.32843 13 6.5C13 5.67157 12.3284 5 11.5 5H1.5Z" fill="#0D4C93"/>
                                            <path d="M0 11.5C0 10.6716 0.671573 10 1.5 10H17.5C18.3284 10 19 10.6716 19 11.5C19 12.3284 18.3284 13 17.5 13H1.5C0.671573 13 0 12.3284 0 11.5Z" fill="#0D4C93"/>
                                            <path d="M1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18H11.5C12.3284 18 13 17.3284 13 16.5C13 15.6716 12.3284 15 11.5 15H1.5Z" fill="#0D4C93"/>
                                        </svg>
                                        {/* close icon */}
                                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                                        </svg>

                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div style={{zIndex: 999}} className={`flex justify-between rounded-full mt-10 sm-none`}>
                    <Link to={"/really-sorry"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">МАГАЗИН</Link>
                    <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">О КОМПАНИИ </Link>
                    <Link to={"/medol"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">ПРОДУКЦИЯ</Link>
                    <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">УСЛУГИ</Link>
                    <Link to={"/medol"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">АКЦИИ И НОВОСТИ</Link>
                    <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="btn py-3 topbar-link rounded-none flex-1 border-l-neutral-content/100 text-xs lg:text-lg">ОБРАТНАЯ СВЯЗЬ</Link>
                </div>

                {opened && (
                    <div className={"mobile-navbar z-50"} style={{left: !opened ? "-100%" : 0}}>
                        <Link to={"/really-sorry"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">МАГАЗИН</Link>
                        <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">О КОМПАНИИ </Link>
                        <Link to={"/medol"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">ПРОДУКЦИЯ</Link>
                        <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">УСЛУГИ</Link>
                        <Link to={"/medol"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">АКЦИИ И НОВОСТИ</Link>
                        <Link to={"/sorry"} title={"i just did the main page"} rel={'noreferrer'} className="w-full underline text-xl">ОБРАТНАЯ СВЯЗЬ</Link>
                    </div>
                )}
                {path.pathname === '/' && <CustomCarousel />}
            </nav>
        </header>
    )
}

export default Header;