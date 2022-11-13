import React from "react";

//import { leaders } from "../constants";
import styles, { layout } from "../style";

const Event_heading = () => {
    return (
        <div className={`bg-primary ${styles.flexStart}`}>
            
            <section id="clients" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
                <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

                    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                    <h2 className={styles.heading2}>
                        Upcoming<br className="sm:block hidden" /> Events
                    </h2>
                    <div className="w-full md:mt-0 mt-6">
                        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Welcome to EduNation Tutoring. We offer free tutoring sessions for students in grades K-8. Our tutors are high achieving high school students, that have experience in a wide variety of subjects, ranging from essay writing to computer programming.
                        </p>
                    </div>

                </div>
            
            </section>

        </div>
    );
}

export default Event_heading