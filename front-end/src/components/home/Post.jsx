/* eslint-disable react/prop-types */
import styles from "../../style";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { FaHeart, FaShare, FaComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import axios from "axios";

function Post({ post }) {
  const dispatch = useDispatch();
  const { _id, followings } = useSelector((state) => state.user);

  const handleUserAddRemove = () => {
    axios
      .post("http://localhost:8080/api/user/addRemoveFriend", {
        userId: _id,
        friendId: post.userId,
      })
      .then((res) => {
        dispatch(userActions.addRemoveFriend(res.data.friendList));
      });
  };

  return (
    <div className="flex flex-col p-4 rounded-lg bg-black-gradient">
      <div className="flex justify-between">
        <div className="flex p-2 mb-3">
          <img
            src="/images/user.png"
            alt="people01"
            className="w-8 h-8 rounded-full"
          />
          <span className="self-center ml-2  text-white ">{post.userName}</span>
        </div>
        {_id != post.userId ? (followings?.find((item) =>item._id == post.userId) ? (
          <AiOutlineUserDelete
            size={25}
            className="text-green-500 self-center"
            onClick={handleUserAddRemove}
          />
        ) : (
          <AiOutlineUserAdd
            size={25}
            className="text-dimWhite self-center"
            onClick={handleUserAddRemove}
          />
        )) : <div/>}
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
      </div>
    </div>
  );
}

export default Post;
