/* eslint-disable react/prop-types */
import styles from "../style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaHeart, FaShare, FaComment } from "react-icons/fa";

function Post({ post }) {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-black-gradient">
      <div className="flex justify-between">
        <div className="flex p-2 mb-3">
          <img
            src="/images/user.png"
            alt="people01"
            className="w-8 h-8 rounded-full"
          />
          <span className="self-center ml-2 text-white ">{post.userName}</span>
        </div>
        <AiOutlineUserAdd size={25} className="text-dimWhite self-center" />
      </div>
      <div className="flex flex-col gap-4">
        <h4 className=" font-poppins font-semibold text-xl text-blue-300 ">
          {post.title}
        </h4>
        <p className={styles.paragraph}>{post.body}</p>
        <div className="flex gap-3 text-primary">
          <FaHeart className="size-6" />
          <FaComment className="size-6" />
          <FaShare className="size-6" />
        </div>
        <div className="border rounded-lg border-blue-300 text-blue-300  p-2">
          <p>Reacted by {post.reactions} peoples</p>
        </div>
        <div className="flex">
          <p className="text-dimWhite flex gap-1">
            {post.tags.map((tag) => (
              <span key={tag}>{`#${tag}`}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
