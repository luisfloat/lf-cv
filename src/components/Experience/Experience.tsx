import React, { ComponentProps } from "react";
import ExperienceItem, { IExperienceItem } from "./ExperienceItem";
import styles from "./experience.module.stylus";

type ExperienceProps = {
    title: string;
    items: Array<IExperienceItem>;
} & ComponentProps<"div">;

const Experience: React.FC<ExperienceProps> = ({ items, title, ...props }) => {
    return (
        <div className="section section--main" {...props}>
            <h2 className="section__title">{title}</h2>
            <ul className={styles.items}>
                {items.map((item, i) => (
                    <li key={i}>
                        <ExperienceItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience;