import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Details from "../components/Details/Details";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Interests from "../components/Interests/Interests";
import Organizations from "../components/Organizations/Organizations";
import Skills from "../components/Skills/Skills";
import { availableLocales, useContent } from "../hooks/useContent";
import { useLocale } from "../hooks/useLocale";
import Layout from "../layouts/PageLayout/PageLayout";

const Curriculum: React.FC = () => {
    const { locale, content } = useContent();
    const { setLocale } = useLocale();

    if (!content) {
        return <>No content for {locale}</>
    }

    const handlePrint = () => {
        window.print();
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
                {availableLocales.map((availableLocale, i) => (
                    <Link
                        key={i}
                        to={`/${availableLocale}`}
                        className={`nav__link ${locale === availableLocale ? 'nav__link--active' : ''}`}
                        onClick={() => setLocale(availableLocale)}
                    >
                        {availableLocale}
                    </Link>
                ))}
            </div >
        </>
    );
};

export default Curriculum;