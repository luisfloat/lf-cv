import React, { useMemo } from "react";
import styles from "./footer.module.stylus";
import { formatPhone } from "../../utils/format";

export type ILink = { href: string, value: string };

type FooterLinkProps = {
    label: string;
    obj: ILink;
};

const FooterLink: React.FC<FooterLinkProps> = ({ label, obj }) => {
    const link = useMemo(() => {
        const anchorTypes = {
            "mailto:": "in",
            "https:": "ex",
            "tel:": "in",
        };

        const { href, value } = obj;
        const protocol = new URL(href).protocol;
        const anchorType = anchorTypes[protocol] || "none";

        const attrs = {
            href,
            target: "_blank",
            className: `${styles.link__a} link--${anchorType}`,
        };

        return {
            attrs,
            value: protocol === "tel:" ? formatPhone(value) : value,
        };
    }, [obj]);
    const linkId = `footer-link-${btoa(label)}`;

    return (
        <div className={styles.link}>
            <label className={styles.link__label} htmlFor={linkId}>{label}</label>
            <a {...link.attrs} id={linkId}>{link.value}</a>
        </div>
    )
}

export default FooterLink;