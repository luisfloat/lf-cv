import React, { ComponentProps } from "react";
import Organization, { IOrganization } from "./Organization";
import styles from "./organization.module.stylus";

type OrganizationsProps = {
    title: string;
    items: Array<IOrganization>;
} & ComponentProps<"div">;

const Organizations: React.FC<OrganizationsProps> = ({ items, title, ...props }) => {
    return (
        <div className="section" {...props}>
            <h2 className="section__title">{title}</h2>
            <ul className={styles.items}>
                {items.map((item, i) => (
                    <li key={i}>
                        <Organization {...item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Organizations;