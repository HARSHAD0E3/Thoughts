import { Form, Link } from "react-router-dom";
import styles from "../../style";
import { useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "..";
function SignUp() {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();
  const [emailCheck, setEmailCheck] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    var emailFormat =
      /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (userData.email !== "" && userData.email.match(emailFormat)) {
      axios
        .post("http://localhost:8080/api/user/signup", userData)
        .then((res) => {
          setMessage(res.data?.message);
        })
        .catch(() => setMessage("Something went wrong!"));

      fname.current.value = "";
      lname.current.value = "";
      email.current.value = "";
      password.current.value = "";
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full overflow-hidden bg-primary h-screen ">
        <div className={`${styles.paddingX} ${styles.flexCenter} h-full`}>
          <div className="absolute z-0 w-[60%] h-[60%]  rounded-full blue__gradient"></div>

          <Form
            method="POST"
            action="http://localhost:8080/user/signup"
            className={`flex justify-center items-start gap-1 p-6 z-[1] flex-col min-w-[400px] border rounded-md  border-white`}
            onSubmit={handleSubmit}
          >
            {message && (
              <p className="font-poppins font-small text-green-500">
                {message}
              </p>
            )}
            <label
              htmlFor="firstName"
              className="font-poppins self-start text-white p-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={fname}
              required
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
              name="lastName"
              ref={lname}
              required
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
              name="email"
              ref={email}
              required
              className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black rounded-lg"
            />
            {!emailCheck && (
              <span className="font-poppins font-small text-red-500">
                Plese enter valid email!
              </span>
            )}
            <label
              htmlFor="password"
              className="font-poppins self-start text-white p-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={password}
              required
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
    </>
  );
}

export default SignUp;
