/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";

function User() {
  const [userToggle, setUserToggle] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userActions.fetchCurrentUser({}));
    navigate("/");
  };

  return (
    <>
      <FaUserCircle
        className="text-white  self-center w-[28px] h-[28px] m-2"
        onClick={() => setUserToggle((prev) => !prev)}
      />
      <div
        className={`${
          userToggle ? "flex" : "hidden"
        } absolute w-full top-0 right-0 h-3/4 order-2`}
        onClick={() => setUserToggle((prev) => !prev)}
      >
        <ul
          className="list-none flex flex-col gap-4 justify-end backdrop-blur-sm items-center flex-1 p-6 bg-black-gradient fixed top-20 right-0 z-[1032] my-2 w-full sm:w-[355px]  xs:w-1/2 rounded-xl sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="flex flex-col items-center mt-4 gap-4">
            {Object.keys(user).length !== 0 ? (
              <ul className="list-none flex flex-col gap-4 font-poppins justify-center items-center text-white">
                <li>{`${user.firstName} ${user.lastName}`}</li>
                <li>Account</li>
                <li onClick={handleLogout}>
                  <Button text={"Log out"} />
                </li>
              </ul>
            ) : (
              <>
                <Link to={"/signup"}>
                  <Button text={"Sign Up"} />
                </Link>
                <Link to={"/signin"}>
                  <Button text={"Sign in"} />
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default User;
