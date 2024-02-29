import { Form, Link } from "react-router-dom";
import styles from "../style";
function SignUp() {
  return (
    <div className="w-full overflow-hidden bg-primary h-screen ">
      <div className={`${styles.paddingX} ${styles.flexCenter} h-full`}>
        <div className="absolute z-0 w-[60%] h-[60%]  rounded-full blue__gradient"></div>

        <Form
          action=""
          className={`flex justify-center items-start gap-1 p-6 z-[1] flex-col min-w-[400px] border rounded-md  border-white`}
        >
          <label
            htmlFor="userName"
            className="font-poppins self-start text-white p-2"
          >
            User Id
          </label>
          <input
            type="text"
            id="userName"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <label
            htmlFor="firstName"
            className="font-poppins self-start text-white p-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <label
            htmlFor="lastName"
            className="font-poppins self-start text-white p-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <label
            htmlFor="email"
            className="font-poppins self-start text-white p-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <label
            htmlFor="pass"
            className="font-poppins self-start text-white p-2"
          >
            Password
          </label>
          <input
            type="text"
            id="pass"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <label
            htmlFor="confirmPass"
            className="font-poppins self-start text-white p-2"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="confirmPass"
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
          />
          <p className="p-1 mt-2  font-poppins font-normal  w-fulltext-[16px] text-blue-300 ">
            Existing user?{" "}
            <Link to="/signin" className="underline">
              Sign In
            </Link>
          </p>
          <button
            type="submit"
            className="w-full text-center text-black bg-green-400 rounded-md  p-2"
          >
            Create
          </button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
