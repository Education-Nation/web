import styles from "../style";
import Billing from "./Events_home";
import Business from "./Materials";
import CTA from "./CTA";
import Stats from "./Stats";
import Hero from "./Hero";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <Testimonials />
                    <CTA />
                </div>
            </div>
        </div>
    );
}

export default Home;