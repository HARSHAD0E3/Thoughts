import styles from "../style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaHeart, FaShare, FaComment } from "react-icons/fa";

function Post() {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-black-gradient">
      <div className="flex justify-between">
        <div className="flex p-2 mb-3">
          <img src="/images/user.png" alt="people01" className="w-8 h-8 rounded-full" />
          <span className="self-center ml-2 text-white ">Marry Pique</span>
        </div>
        <AiOutlineUserAdd size={25} className="text-dimWhite self-center" />
      </div>
      <div className="flex flex-col gap-4">
        <h4 className=" font-poppins font-semibold text-xl text-blue-300 ">
          Social Profiles
        </h4>
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
        <div className="flex">
          <p className="text-dimWhite">#new #app</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
