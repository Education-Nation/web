import { bill } from "../assets";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Link to="/events">
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </Link>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Upcoming Events
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Education Nation, we constantly host events in schools and community centers. View the full events by clicking on the image! 
      </p>
    </div>
  </section>
);

export default Billing;
