import { FaTwitter, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";

function ProfileCard() {
  const user = useSelector((state) => state.user);
  return (
    <div className="hidden fixed md:flex flex-col p-4 rounded-lg bg-black-gradient min-w-[350px] h-max z-[1]">
      <div className="flex p-2 mb-3">
        <img
          src="/images/user.png"
          alt="people01"
          className="w-8 h-8 rounded-full"
        />
        <span className="self-center ml-2 text-white ">{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-between font-poppins text-dimWhite p-4">
        <p>
          <span className="block text-center text-dimWhite">
            {user.followings?.length}
          </span>
          Followings
        </p>
        <p>
          <span className="block text-center text-dimWhite">
            {user.followers?.length}
          </span>
          Followers
        </p>
      </div>
      <hr className="border-gray-600" />
      <div className="p-4">
        <p className="font-poppins text-dimWhite">{user.bio}</p>
      </div>
      <hr className="border-gray-600" />
      <div className="p-4">
        <h4 className="text-white font-poppins font-semibold">
          Social Profiles
        </h4>
        <a href="#" className="flex gap-2 text-dimWhite p-2">
          <FaTwitter size={20} />
          <span>Twitter</span>
        </a>
        <a href="#" className="flex gap-2 text-dimWhite p-2">
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
