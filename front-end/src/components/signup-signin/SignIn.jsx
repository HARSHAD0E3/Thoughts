import { Form, Link, useNavigate } from "react-router-dom";
import styles from "../../style";
import axios from "axios";
import { useRef, useState } from "react";
import { Navbar } from "..";

function SignIn() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    axios
      .post("http://localhost:8080/api/user/login", userData)
      .then((res) => {
        if (!res.data.success) return setMessage(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(() => setMessage("Something went wrong!"));

    email.current.value = "";
    password.current.value = "";
  };

  return (
    <>
      <Navbar />
      <div className="w-full overflow-hidden bg-primary h-screen ">
        <div className={`${styles.paddingX} ${styles.flexCenter} h-full`}>
          <div className="absolute z-0 w-[60%] h-[60%]  rounded-full blue__gradient"></div>

          <Form
            action="http://localhost:8080/api/user/login"
            method="POST"
            className={`flex justify-center items-start gap-1 p-6 z-[1] flex-col min-w-[400px] border rounded-md  border-white`}
            onSubmit={handleSubmit}
          >
            {message && (
              <span className="font-poppins font-small text-red-500">
                {message}
              </span>
            )}

            <label
              htmlFor="userName"
              className="font-poppins self-start text-white p-2"
            >
              User Id
            </label>
            <input
              type="text"
              id="userName"
              name="email"
              ref={email}
              className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
            />
            <label
              htmlFor="password"
              className="font-poppins self-start text-white p-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              ref={password}
              className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
            />

            <p className="p-1 mt-2  font-poppins font-normal  w-fulltext-[16px] text-blue-300 ">
              New user?{" "}
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </p>
            <button
              type="submit"
              className="w-full text-center text-black bg-green-400 rounded-md  p-2"
            >
              Sign In
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
