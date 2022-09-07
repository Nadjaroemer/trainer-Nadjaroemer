import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import NavMenuItem from "../components/NavMenuItem";
import { StateContext } from "../context/Context";

const NavigationMenu = ({ setToggle }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(StateContext);
  const logOut = () => {
    setUserData(false);
    navigate("/home");
  };
  return (
    <div className="w-full h-screen absolute top-0 bg-white z-10">
      <div className="flex justify-end px-6 pt-8">
        <button onClick={() => setToggle(false)}>
          <HiX className="text-3xl text-tertiary-700" />
        </button>
      </div>
      <ul className="text-center">
        <NavMenuItem destination="/home" text="Home" />
        <NavMenuItem destination="/search" text="Search" />
        <NavMenuItem destination="/schedule" text="My Schedule" />
        {!userData && <NavMenuItem destination="/signin" text="Sign In" />}
        {userData && (
          <NavMenuItem destination="/home" onClick={logOut} text="Log out" />
        )}
      </ul>
    </div>
  );
};

export default NavigationMenu;
