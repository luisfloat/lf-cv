import HorizontalList from "../HorizontalList/HorizontalList";

type InterestsProps = {
    title: string;
    headline: Array<string>;
    separator?: string;
};

const Interests: React.FC<InterestsProps> = ({ title, headline, separator }) => {
    return (
        <section className="section section--main">
        <h2 className="section__title">{ title }</h2>
        <HorizontalList items={headline} separator={separator} type="normal" />
    </section>
    );
};

export default Interests;