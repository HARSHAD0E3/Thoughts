import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/api/user/verifyUser", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.success === true) return navigate("/home");
        });
    }
  }, [navigate]);
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
