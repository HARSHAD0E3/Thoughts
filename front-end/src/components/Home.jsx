import styles from "../style";
import { Navbar, Post, FriendsList } from "./index";
import { FaTwitter, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full overflow-hidden bg-primary h-full pt-10 ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} flex`}>
            <aside className="hidden md:flex flex-col p-4 rounded-lg bg-black-gradient min-w-[350px] h-max z-[1]">
              <div className="flex p-2 mb-3">
                <img
                  src="/images/user.png"
                  alt="people01"
                  className="w-8 h-8 rounded-full"
                />
                <span className="self-center ml-2 text-white ">
                  Marry Pique
                </span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex justify-between font-poppins text-dimWhite p-4">
                <p>
                  <span className="block text-center text-dimWhite">0</span>
                  Posts
                </p>
                <p>
                  <span className="block text-center text-dimWhite">0</span>
                  Friends
                </p>
                <p>
                  <span className="block text-center text-dimWhite">0</span>
                  Following
                </p>
              </div>
              <hr className="border-gray-600" />
              <div className="p-4">
                <p className="font-poppins text-dimWhite">
                  Workin on a weekend like usual.
                </p>
                <p className="font-poppins text-dimWhite">IT engineer</p>
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
            </aside>
            <div className="fixed  z-0 w-[100%] h-[60%] rounded-full blue__gradient"></div>

            <section className="flex flex-col gap-4 flex-1 px-10 z-[1]">
              <Post />
              <Post />
              <Post />
            </section>

            <aside className="hidden lg:flex flex-col p-4 rounded-lg z-[1] bg-black-gradient min-w-[300px] h-max lg:w-[350px] ">
              <div className="flex flex-col p-2 gap-1 ">
                <h4 className="text-white font-poppins font-semibold ">
                  Friends List
                </h4>
                <FriendsList />
                <FriendsList />
                <FriendsList />
                <FriendsList />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
