import React from "react";
import styles, { layout } from "../style";
import "./event_content.css";

const Event_content = () => {
    return (
        <div className={`bg-primary ${styles.flexStart}`}>
            <section id="clients" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
                <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

                    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                        <h2 className={styles.heading2}>
                            Helpful Links<br className="sm:block hidden" /> For Students
                        </h2>
                        <div className="w-full md:mt-0 mt-6">
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                <a href="https://forms.gle/znn6nwg7jNan2AEj6">If you would like to <strong>request a tutor</strong>, please click <u>here</u></a>
                            </p>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                <a href="https://forms.gle/9SCq1rEzpLUrK31b7">If you would like to <strong>apply to be a tutor</strong>, please click <u>here</u>.</a>
                            </p>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                Tutors will be able to earn service hours while helping out their local community!
                            </p>
                            
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                    <a href="https://docs.google.com/document/d/13vQ7xXQ0-5N2Zbr2rRkcKOFeXzit9FhFZT9HOphDfBU/edit?usp=sharing"><u>Below Document Full Link</u></a> 
                            </p>
                        </div>
                </div>
                <iframe  allowFullscreen="" frameBorder="0" src="https://docs.google.com/document/d/e/2PACX-1vSz96h2pvSXoTRx67vusY0R4fZSk8W4xdfz5YCrEiK4lVXFy4gKNqGDSaruBPQtKIB9r2RnQ9vvs5nH/pub?embedded=true"></iframe>

            </section>
        </div>
    );
}

export default Event_content;