import Hero from "./Hero";
import styles from "../style";
import Trending from "./Trending";

function LandingPage() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Trending />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
