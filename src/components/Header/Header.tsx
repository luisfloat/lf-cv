import { ComponentProps } from "react";
import styles from "./header.module.stylus";

type HeaderProps = {
    title: string;
    description: string;
} & ComponentProps<"header">;

const Header: React.FC<HeaderProps> = ({ title, description, ...props }) => {
    return (
        <header className="section" {...props}>
            <h1 className="section__title section__title--header">{title}</h1>
            <div className={styles.description}>{description}</div>
        </header>
    );
};

export default Header;