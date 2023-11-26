import Card from "../component/Card/Card.jsx";
import Services from "../component/services/Services.jsx";

const Main = () => {
    return (
        <>
            <div className="container mx-auto sm:px-6 py-4">
                <Card />
            </div>
            <Services />
        </>
    );
};

export default Main;