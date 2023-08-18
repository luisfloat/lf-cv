import HorizontalList from "../HorizontalList/HorizontalList";
import styles from "./skills.module.stylus";

type SkillsProps = {
    title: string;
    separator?: string;
    hard1: Array<string>;
    hard2: Array<string>;
    soft1: Array<string>;
    soft2: Array<string>;
};

const Skills: React.FC<SkillsProps> = ({ title, separator, hard1, hard2, soft1, soft2 }) => {
    return (
        <section className="section section--aside">
            <h2 className="section__title">{title}</h2>
            <div className={styles.skills}>
                <HorizontalList items={hard1} separator={separator} type="primary" />
                <HorizontalList items={hard2} separator={separator} type="normal" />
                <HorizontalList items={soft1} separator={separator} type="normal" />
                <HorizontalList items={soft2} separator={separator} type="primary" />
            </div>
        </section>
    );
};

export default Skills;