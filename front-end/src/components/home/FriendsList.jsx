/* eslint-disable react/prop-types */
import { AiOutlineUserDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import axios from "axios";

function FriendsList({ friend }) {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);

  const handleUserRemove = () => {
    axios
      .post("http://localhost:8080/api/user/addRemoveFriend", {
        userId: _id,
        friendId: friend._id,
      })
      .then((res) => {
        dispatch(userActions.addRemoveFriend(res.data.friendList));
      });
  };

  return (
    <div className="flex justify-between font-poppins p-2 border text-dimWhite border-gray-600 rounded-lg">
      <div className="flex p-2">
        <img
          src="/images/user.png"
          alt="people01"
          className="w-8 h-8 rounded-full"
        />
        <span className="self-center ml-2 ">{`${friend.firstName} ${friend.lastName}`}</span>
      </div>
      <AiOutlineUserDelete
        size={25}
        className="self-center text-green-500 "
        onClick={handleUserRemove}
      />
    </div>
  );
}

export default FriendsList;
