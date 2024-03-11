import { useDispatch, useSelector } from "react-redux";
import styles from "../../style";
import { Navbar, Post, FriendsList, CreatePost, ProfileCard } from "../index";
import { useEffect, useState } from "react";
import { postsActions } from "../../store/postSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";

function Home() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts);
  const { followings } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/signin");
    axios
      .get("http://localhost:8080/api/user/verifyUser", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (!res.data.success) return navigate("/signin");
        const userInfo = res.data.userInfo;
        axios
          .get("http://localhost:8080/api/posts/", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => dispatch(postsActions.fetchInitialPosts(res.data)));
        axios
          .get(`http://localhost:8080/api/user/getAllFriends/${userInfo._id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) =>
            dispatch(
              userActions.fetchCurrentUser({
                ...userInfo,
                followings: res.data.friendList,
              })
            )
          );
      })
      .catch(() => setError(true));
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar />
      {error && (
        <p className="bg-primary text-3xl text-white font-poppins">
          Something went wrong!
        </p>
      )}
      <div className="w-full bg-primary  h-full  pt-10 ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} flex`}>
            <aside className="hidden md:flex flex-col rounded-lg min-w-[350px] h-max z-[1]">
              <ProfileCard />
            </aside>
            <div className="fixed  z-0 w-[100%] h-[60%] rounded-full blue__gradient"></div>

            <section className="flex flex-col gap-4 flex-1 px-10 z-[1]">
              <CreatePost />
              {postList.map((item) => (
                <Post key={item._id} post={item}></Post>
              ))}
            </section>

            <aside className="hidden lg:flex  z-[1]  min-w-[300px] h-max lg:w-[350px] ">
              <div className="hidden fixed lg:flex flex-col p-4 gap-1  rounded-lg z-[1] bg-black-gradient min-w-[300px] h-max lg:w-[350px] ">
                <h4 className="text-white font-poppins font-semibold ">
                  Friends List
                </h4>
                {followings?.map((friend) => (
                  <FriendsList key={friend._id} friend={friend} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
