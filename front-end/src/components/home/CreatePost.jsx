import styles from "../../style";
function CreatePost() {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-black-gradient">
      <div className="flex justify-between">
        <div className="flex p-2 mb-3">
          <img
            src="/images/user.png"
            alt="people01"
            className="w-8 h-8 rounded-full"
          />
          <span className="self-center ml-2 text-white ">{"Marry Pique"}</span>
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
          className="p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black bg-dimWhite rounded-lg"
        />
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="2"
          className={`${styles.paragraph} p-2  font-poppins font-normal cursor-pointer w-full outline-none text-[16px] text-black bg-dimWhite rounded-lg`}
          placeholder="What's going on?"
        ></textarea>
        <button className="w-1/4 min-w-28 text-center text-black bg-green-400 rounded-md  p-2">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
