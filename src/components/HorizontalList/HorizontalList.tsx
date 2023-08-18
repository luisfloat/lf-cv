import styles from "./horizontal-list.module.stylus";

type HorizontalListProps = {
    type?: "primary" | "normal";
    separator?: string;
    items: Array<string>;
};

const HorizontalList: React.FC<HorizontalListProps> = ({ type, separator, items }) => {
    return (
        <ul className={styles.list}>
            {items.map((item, i) => (
                <li key={i}>
                    <span
                        className={
                            `${styles.item} ${type === 'primary' ? styles.isPrimary : ''}`
                        }
                    >
                        {item}
                    </span>
                    {i !== items.length - 1 && (
                        <span className={styles.separator}>{separator || "·"}</span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HorizontalList;