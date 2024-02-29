import styles from "../style";
import TrendingCards from "./TrendingCards";
function Trending() {
  return (
    <section
      id="trending"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-0 w-[60%] h-[60%]  rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>Trending</h1>
      </div>
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        <TrendingCards />
        <TrendingCards />
        <TrendingCards />
      </div>
    </section>
  );
}

export default Trending;
