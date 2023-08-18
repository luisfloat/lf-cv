import React, { ComponentProps } from "react";
import styles from "./experience.module.stylus";

export type IExperienceItem = {
    role: string;
    link: string;
    date: string;
    employmentType: string;
    company: string;
    description: string;
    skills: string;
};

type ExperienceItemProps = IExperienceItem & ComponentProps<"div">;

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    return (
        <div>
            <h3 className={styles.role}>{ props.role }</h3>
            <h4 className={styles.headline}>
                <a href={props.link} target="_blank" className={styles.headline__company}>{ props.company }</a>
                ·
                <span className={styles.headline__employmentType}>{ props.employmentType }</span>
                <span className={styles.date}>({ props.date })</span>
            </h4>
            <p className={styles.description} v-if="description">{ props.description}</p>
            <p className={styles.skills}>
                { props.skills }
            </p>
        </div>
    )
}

export default ExperienceItem;