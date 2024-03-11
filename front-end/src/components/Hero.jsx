import styles from "../style";
import { FaLightbulb } from "react-icons/fa";
import { GetStarted } from "./index";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`${styles.flexStart} justify-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <FaLightbulb className="text-cyan-500 border border-gray-900 rounded-full bg-gray-800 w-[32px] h-[32px] p-2 mr-2" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">Have a Thought!</span> Just share it.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
            The New <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to={"/signup"}>
              <GetStarted />
            </Link>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[72px] w-full">
          Social Network.
        </h1>
        <p className={`${styles.paragraph}`}>
          This is important to remember. Love isn&apos;t like pie. You
          don&apos;t need to divide it among all your friends and loved ones. No
          matter how much love you give, you can always give more.
        </p>
      </div>
      <div className="">
        <img
          src="/images/hero1.png"
          alt="hreo1"
          className="w-full h-full relative z-[2]"
        />
        <div className="w-[40%] h-[35%] absolute z-0 pink__gradient top-20 right-14" />
        <div className="w-[50%] h-[50%] absolute z-1 bottom-40 right-14 rounded-full white__gradient" />
        <div className="w-[50%] h-[50%] absolute z-0  bottom-40 right-14 blue__gradient" />
      </div>
    </section>
  );
}

export default Hero;
