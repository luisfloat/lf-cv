import DetailsItem from "./DetailsItem";
import styles from "./details.module.stylus";

type DetailsProps = {
    title: string;
    links: Array<DetailsItem>;
};

const Details: React.FC<DetailsProps> = ({ title, links }) => {
    return (
        <section className="section section--aside">
            <h2 className="section__title">{title}</h2>
            <ul className={styles.items}>
                {links.map((link, i) => (
                    <li key={i}>
                        <DetailsItem {...link} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Details;