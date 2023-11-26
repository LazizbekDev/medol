import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carusel.css';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SlideItem from "./SlideItem.jsx"; // Add your custom styles here

const CustomCarousel = () => {

    const data = [
        {
            src: "/slide-1@2x.png",
            heading: "Анализатор ABL800 FLEX",
            p: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
        },
        {
            src: "/pingwing.png",
            heading: "Аппарат ИК-лазерный МАКДЭЛ-09.1",
            p: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
        },
        {
            src: "/slide-1@2x.png",
            heading: "Глюкометр для измерения глюкозы",
            p: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии"
        }
    ]

    return (
        <div className="carousel">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SlideItem src={item.src} heading={item.heading} p={item.p} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomCarousel;