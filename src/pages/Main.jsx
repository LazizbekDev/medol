import Card from "../component/Card/Card.jsx";
import Services from "../component/services/Services.jsx";
import Company from "../component/company/Company.jsx";
import Brand from "../component/brand/Brand.jsx";

const Main = () => {
    return (
        <>
            <div className="container mx-auto sm:px-6 py-4">
                <Card />
            </div>
            <Services />

            <div className="container mx-auto sm:px-6 py-4">
                <Company />
            </div>
            <Brand />
        </>
    );
};

export default Main;