import React, { ComponentProps } from "react";
import styles from "./organization.module.stylus";

export type IOrganization = {
    role: string;
    link: string;
    date: string;
    name: string;
    description: string;
    skills: string;
};

type OrganizationProps = IOrganization & ComponentProps<"div">;

const Organization: React.FC<OrganizationProps> = (props) => {
    return (
        <div>
            <h3 className={styles.headline}>
                <a href={props.link} target="_blank" className={styles.name}>{props.name}</a>
                <span className={styles.role}>({props.role})</span>
            </h3>
            <h4 className={styles.date}>
                {props.date}
            </h4>
            <p className={styles.description} v-if="description">{props.description}</p>
            <p className={styles.skills}>
                {props.skills}
            </p>
        </div>
    )
}

export default Organization;