import React from "react";
import styles from "./education.module.stylus";

export type IEducationItem = {
    title: string;
    org: string;
    startTime: string;
    endTime: string;
};

type ExperienceItemProps = IEducationItem;

const EducationItem: React.FC<ExperienceItemProps> = (props) => {
    return (
        <>
            - <span className={styles.title}>{ props.title }</span>
            · <span className={styles.org}>{ props.org }</span>
            <span className={styles.time}>({ props.startTime } - { props.endTime })</span>
        </>
    )
}

export default EducationItem;