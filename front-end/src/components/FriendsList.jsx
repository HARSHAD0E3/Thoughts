import { AiOutlineUserDelete } from "react-icons/ai";
function FriendsList() {
  return (
    <div className="flex justify-between font-poppins p-2 border text-dimWhite border-gray-600 rounded-lg">
      <div className="flex p-2">
        <img src="/images/user.png" alt="people01" className="w-8 h-8 rounded-full" />
        <span className="self-center ml-2 ">Marry Pique</span>
      </div>
      <AiOutlineUserDelete size={25} className="self-center " />
    </div>
  );
}

export default FriendsList;
