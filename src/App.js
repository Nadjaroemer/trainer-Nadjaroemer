import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

import { StateContext } from "./context/Context";
import Home from "./views/Home";
import ClassDetails from "./views/ClassDetails";
import Schedule from "./views/Schedule";
import Search from "./views/Search";
import SignIn from "./views/SignIn";
import Welcome from "./views/Welcome";

function App() {
  const { userToken, setUserData } = useContext(StateContext);

  useEffect(() => {
    if (userToken) {
      axios
        .get(`http://localhost:4000/api/v1/users/${userToken.userId}`, {
          headers: { Authorization: `Bearer ${userToken?.token}` },
        })
        .then((response) => {
          setUserData(response.data);
        });
    }
  }, [setUserData, userToken]);

  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="/home" element={<Home />} />
        <Route path="/classdetails/:id" element={<ClassDetails />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
