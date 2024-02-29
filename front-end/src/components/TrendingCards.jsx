import { FaHeart, FaShare, FaComment } from "react-icons/fa";
import styles from "../style";

function TrendingCards() {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex">
        <img src="/images/user.png" alt="people01" className="w-8 h-8 rounded-full" />
        <span className="self-center ml-2 text-white ">Marry Pique</span>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-blue-300 font-semibold">
          This is important to remember.
        </p>
        <p className={styles.paragraph}>
          This is important to remember. Love isn&apos;t like pie. You
          don&apos;t need to divide it among all your friends and loved ones. No
          matter how much love you give, you can always give more.
        </p>
        <div className="flex gap-3 text-primary">
          <FaHeart className="size-6" />
          <FaComment className="size-6" />
          <FaShare className="size-6" />
        </div>
        <div className="border rounded-lg border-blue-300 text-blue-300  p-2">
          <p>Reacted by 1239 peoples</p>
        </div>
      </div>
    </div>
  );
}

export default TrendingCards;
