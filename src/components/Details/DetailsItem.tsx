import { useMemo } from "react";

type DetailsItem = {
    type: "website" | "phone" | "email" | "data" | string;
    label?: string;
    domain?: string;
};
type DetailsProps = DetailsItem;

const DetailsItem: React.FC<DetailsProps> = ({ type, domain, label }) => {
    const linkAttrs = useMemo(() => {
        const types = {
            website: ["https", "ex"],
            phone: ["tel", "in"],
            email: ["mailto", "in"],
            data: [undefined, "none"],
        };
        const [protocol, className] = types[type];
        const href = protocol ? `${protocol}:${domain}` : undefined;
        const target = type === "website" ? "_blank" : undefined;

        return {
            className: `link--${className}`,
            href,
            target,
        };
    }, [domain, type]);

    return (
        <div><a {...linkAttrs}>{label}</a></div>
    );
};

export default DetailsItem;