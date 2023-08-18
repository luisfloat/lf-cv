import React from "react";
import styles from "./education.module.stylus";
import EducationItem, { IEducationItem } from "./EducationItem";

type EducationProps = {
    title: string;
    footerText?: string;
    items: Array<IEducationItem>;
};

const Education: React.FC<EducationProps> = (props) => {
    return (
        <section className="section section--main">
            <h2 className="section__title">{props.title}</h2>
            <ul className={styles.items}>
                {props.items.map((item, i) => (
                    <li key={i} className={styles.item}>
                        <EducationItem {...item} />
                    </li>
                ))}
            </ul>
            {props.footerText && <p className={styles.footerText}>{props.footerText}</p>}
        </section>
    );
};

export default Education;