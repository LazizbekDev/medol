import Card from "../component/Card/Card.jsx";
import Services from "../component/services/Services.jsx";
import Company from "../component/company/Company.jsx";
import Brand from "../component/brand/Brand.jsx";
import News from "../component/news/News.jsx";

const Main = () => {
    return (
        <>
            <div className="container mx-auto sm:px-6 py-4" style={{zIndex: 0}}>
                <Card />
            </div>
            <Services />

            <div className="container mx-auto sm:px-6 py-4" style={{zIndex: 0}}>
                <Company />
            </div>
            <News />

            <Brand />
        </>
    );
};

export default Main;