import React, { ComponentProps } from "react";
import styles from "./page-layout.module.stylus";
import Footer from "./Footer";
import { ILink } from "./FooterLink";

export type IGeneration = { text: string; locale?: string; timeFormat: string; };

type LayoutProps = {
    aside: React.ReactNode,
    footerData: { generation: IGeneration, links: Record<string, ILink>};
} & ComponentProps<"div">;

const Layout: React.FC<LayoutProps> = ({ children, footerData, ...props }) => {
    return <>
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                {props.aside}
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer {...footerData} />
    </>
}

export default Layout;