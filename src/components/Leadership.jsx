import React from "react";

//import { leaders } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { leaders } from "../constants";

const Leadership = () => {
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <section id="clients" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
                    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

                    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                    <h2 className={styles.heading2}>
                        Education Nation's <br className="sm:block hidden" /> Leadership
                    </h2>
                    <div className="w-full md:mt-0 mt-6">
                        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Education Nation's Leadership consists of various students from the LCPS school district. Here is some information about them!
                        </p>
                    </div>
                    </div>

                    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                    {leaders.map((card) => <FeedbackCard key={card.id} {...card} />)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Leadership;