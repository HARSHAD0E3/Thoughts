import { useRef, useState } from "react";
import styles from "../../style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function CreatePost() {
  const user = useSelector((state) => state.user);
  const title = useRef();
  const content = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleAddNewPost = () => {
    if (!title.current.value || !content.current.value) {
      alert("Fields are required to create a post");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) return navigate("/signin");
    axios
      .post(
        "http://localhost:8080/api/posts/createPost",
        {
          userId: user._id,
          userName: user.firstName + " " + user.lastName,
          title: title.current.value,
          content: content.current.value,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .catch(() => {
        setError(true);
      });
    title.current.value = "";
    content.current.value = "";
  };

  return (
    <>
      {error && (
        <p className="bg-primary text-3xl text-white font-poppins">
          Something went wrong!
        </p>
      )}
      <div className="flex flex-col p-4 rounded-lg bg-black-gradient">
        <div className="flex justify-between">
          <div className="flex p-2 mb-3">
            <img
              src="/images/user.png"
              alt="people01"
              className="w-8 h-8 rounded-full"
            />
            <span className="self-center ml-2 text-white ">
              {"Marry Pique"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="title"
            className="text-dimWhite font-poppins font-semibold text-2xl "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            ref={title}
            required
            className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black bg-dimWhite rounded-lg"
          />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="2"
            ref={content}
            className={`${styles.paragraph} p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black bg-dimWhite rounded-lg`}
            placeholder="What's going on?"
            required
          ></textarea>
          <button
            className="w-1/4 min-w-28 text-center text-black bg-green-400 rounded-md  p-2"
            onClick={handleAddNewPost}
          >
            Create Post
          </button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
