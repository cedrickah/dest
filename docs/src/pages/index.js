import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Dest
                </Heading>
                <p className="hero__subtitle">
                    Create desktop applications using a React syntax, on all
                    platforms
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="Dest"
            description="Create desktop applications using a React syntax, on all platforms"
        >
            <HomepageHeader />
        </Layout>
    );
}
