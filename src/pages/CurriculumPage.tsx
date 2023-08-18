import React from "react";
import Details from "../components/Details/Details";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Interests from "../components/Interests/Interests";
import Organizations from "../components/Organizations/Organizations";
import Skills from "../components/Skills/Skills";
import { langsAvailable, useContent } from "../content";
import Layout from "../layouts/PageLayout/PageLayout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Curriculum: React.FC = () => {
    const { locale, content } = useContent();

    const handlePrint = () => {
        window.print();
    }

    if (!content) {
        return <>No content for {locale}</>
    }

    return (
        <>
            <Helmet>
                <title>{content.head.title}</title>
            </Helmet>
            <Layout aside={
                <>
                    <Header {...content.body.header} />
                    <Details {...content.body.details} />
                    <Skills {...content.body.skills} />
                    <Interests {...content.body.interests} />
                    <Organizations {...content.body.organizations} />
                </>
            }
                footerData={content.body.footer}
            >
                <section className="section section--aside">
                    <h2 className="section__title">{content.body.about.title}</h2>
                    <p className="section__text">{content.body.about.text}</p>
                </section>
                <Experience {...content.body.experience} />
                <Education {...content.body.education} />
            </Layout>

            <div className="nav">
                <button className="print" onClick={handlePrint}>
                    {content.body.nav.print}
                </button>
                {langsAvailable.map((lang, i) => (
                    <Link
                        key={i}
                        to={`/${lang}`}
                        className={`nav__link ${lang === locale ? 'nav__link--active' : ''}`}
                    >
                        {lang}
                    </Link>
                ))}
            </div >
        </>
    );
};

export default Curriculum;