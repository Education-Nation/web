import React from "react";

//import { leaders } from "../constants";
import styles, { layout } from "../style";

const Events = () => {
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
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

                    <section id="gnaru" className={layout.section}>
                        <div className={layout.sectionInfo}>
                            <h2 className={styles.heading2}>
                                Helpful Links<br className="sm:block hidden" /> For Students
                            </h2>
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

                            <div className="video-container">
                                <iframe display="block" width="800" height="500" allowFullscreen="" frameBorder="0" src="https://docs.google.com/document/d/e/2PACX-1vQo2GqeUivgf8vi4I4EJv0yPDLJzGKFpaxl1lx4LrEU9I9YJ2GMYHiFQ_MhS-x7n4a8QGGxxy9myInF/pub?embedded=true"></iframe>
                            </div>
                        
                        </div>
                    </section>
                
                </section>
            </div>
        </div>
    );
}

export default Events;

