import "./Company.css";

const Company = () => {
    return (
        <div className={"mx-auto w-full company"}>
            <h1 className={"h1 py-12 primary-color hero-heading"} align={"center"}>О КОМПАНИИ</h1>

            <div className="hero md:mt-64 mt-0">
                <div className="hero-content flex-col lg:flex-row">
                    <div className={"circle cyan hidden lg:block"}>
                        <div className={"circle gray"}>
                            <div className={"circle cyan"}>
                                <img src="/logo-1@2x.png" />
                            </div>
                        </div>
                    </div>
                    <div className={"max-w-screen-md company-hero"}>
                        <p className="py-6">
                            Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины,
                            инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства
                            в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services".
                            Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения
                            передовых технологий в систему здравоохранения Республики Узбекистан.
                        </p>
                        <button className="btn w-full sm:w-max md:px-12 sm:px-6 mx-auto gradient-btn rounded-full">Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;