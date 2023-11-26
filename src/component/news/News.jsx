import "./news.css";
import {Grid, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {useCallback, useEffect, useRef, useState} from "react";
import NewsCard from "./NewsCard.jsx";

const News = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            console.log(window.innerWidth)

        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const sliderRef = useRef(null);

    const news = [
        {
            src: "/doctors.png",
            slug: "/Mастер-класс-в-исполнении-Галлямова--Эдуарда-Абдулхаевича",
            title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
            date: "07.21.2022",
            p: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
        },
        {
            src: "/doctors.png",
            slug: "/Mастер-класс-в-исполнении-Галлямова--Эдуарда-Абдулхаевича",
            title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
            date: "02.12.2022",
            p: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
        },
        {
            src: "/doctors.png",
            slug: "/Mастер-класс-в-исполнении-Галлямова--Эдуарда-Абдулхаевича",
            title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
            date: "11.06.2023",
            p: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
        },
        {
            src: "/doctors.png",
            slug: "/Mастер-класс-в-исполнении-Галлямова--Эдуарда-Абдулхаевича",
            title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
            date: "07.21.2022",
            p: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
        },
        {
            src: "/doctors.png",
            slug: "/Mастер-класс-в-исполнении-Галлямова--Эдуарда-Абдулхаевича",
            title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
            date: "07.21.2022",
            p: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
        },
    ]

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className={"container mx-auto sm:px-6 py-4 overflow-hidden"}>
            <h1 className={"h1 pt-6 primary-color hero-heading"} align={"center"}>НОВОСТИ</h1>

            <Swiper
                ref={sliderRef}
                slidesPerView={screenWidth > 768 ? 3 : screenWidth > 573 && screenWidth < 768 ? 2 : 1 }
                grid={{
                    rows: 1,
                }}
                loop={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid,Navigation]}
                className="mySwiper news-swiper"
            >
                {news?.map((report, index) => (
                    <SwiperSlide key={index}>
                        <NewsCard src={report.src} date={new Date(report.date).toDateString()} link={report.title} p={report.p} slug={report.slug} />
                    </SwiperSlide>
                ))}
                <div onClick={handlePrev} className={"skip skip-left"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <g clipPath="url(#clip0_502_241)">
                            <path d="M4.08481 9.49995C4.08481 9.15943 4.21482 8.81895 4.47431 8.55934L12.644 0.389768C13.1637 -0.129923 14.0063 -0.129923 14.5257 0.389769C15.0452 0.90925 15.0452 1.75167 14.5257 2.27141L7.29677 9.49995L14.5255 16.7285C15.045 17.2482 15.045 18.0906 14.5255 18.61C14.006 19.1299 13.1634 19.1299 12.6437 18.61L4.47406 10.4406C4.21453 10.1808 4.08481 9.84034 4.08481 9.49995Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_502_241">
                                <rect width="19" height="19" fill="white" transform="translate(19) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div onClick={handleNext} className={"skip skip-right"} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <g clipPath="url(#clip0_502_246)">
                            <path d="M14.9151 9.49995C14.9151 9.15943 14.7851 8.81895 14.5256 8.55934L6.35597 0.389768C5.83628 -0.129923 4.99369 -0.129923 4.47421 0.389769C3.95472 0.90925 3.95472 1.75167 4.47421 2.27141L11.7032 9.49995L4.47446 16.7285C3.95498 17.2482 3.95498 18.0906 4.47446 18.61C4.99394 19.1299 5.83653 19.1299 6.35622 18.61L14.5259 10.4406C14.7854 10.1808 14.9151 9.84034 14.9151 9.49995Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_502_246">
                                <rect width="19" height="19" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default News;