import ServiceCard from "./ServiceCard.jsx";
import "./services.css"

const Services = () => {
    const serviceData = [
        {
            src: "/servic-1@2x.png",
            heading: "СЕРВИС ОБОРУДОВАНИЯ",
            p: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
        },
        {
            src: "/imcat.png",
            heading: "РЕГИСТРАЦИИ",
            p: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению"
        },
        {
            src: "/manbytrack.png",
            heading: "УСЛУГИ ЛОГИСТИКИ",
            p: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
        },
    ]
    return (
        <div className={"service my-5"} style={{zIndex: 0}}>
            <div className={"service-bg"}/>

            <div className={"container mx-auto sm:px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4"}>
                {serviceData?.map((item, index) => (
                    <ServiceCard key={index} src={item.src} heading={item.heading} p={item.p} />
                ))}
            </div>
        </div>
    );
};

export default Services;