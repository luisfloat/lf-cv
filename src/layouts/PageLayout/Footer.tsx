import React, { useMemo } from "react";
import styles from "./footer.module.stylus";
import luisfloatLogo from "/logos/luisfloat/luisfloat-logo-light.png";
import FooterLink from "./FooterLink";
import moment from "moment";
import { IGeneration } from "./PageLayout";

type FooterProps = {
    links: Record<"string", { href: string, value: string }>;
    generation: IGeneration;
};

const Footer: React.FC<FooterProps> = ({ links, generation }) => {
    const linkAttrs = (key: string) => ({ label: key, obj: links[key] });
    
    const generatedTime = useMemo(() => {
        moment.locale(generation.locale);
        return moment().format(generation.timeFormat);
    }, [generation]);

    return (
        <footer className="section section--footer">
            <ul className={styles.links}>
                {Object.keys(links).map((key, i) => (
                    <li key={i}>
                        <FooterLink {...linkAttrs(key)} />
                    </li>
                ))}
            </ul>
            <div className={styles.logo} >
                <img className={styles.logo__image} src={luisfloatLogo} alt="Logo" />
            </div >
            <div className={styles.generation} >
                <div className={styles.generation__text} data-content={generation.text + generatedTime} />
            </div>
        </footer>
    )
}

export default Footer;