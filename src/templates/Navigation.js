import { useNavigate, useLocation } from "react-router-dom";
import HeadlineH2 from "../components/HeadlineH2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  let pageName = "";
  if (location.pathname === "/home") {
    pageName = "Popular classes";
  }
  if (location.pathname === "/search") {
    pageName = "Search";
  }
  if (location.pathname === "/schedule") {
    pageName = "My schedule";
  }
  return (
    <>
      <nav className="flex justify-between p-6">
        <div className="flex">
          {location.pathname !== "/home" && (
            <button onClick={() => navigate(-1)}>
              <MdOutlineKeyboardArrowLeft className="text-3xl text-tertiary-700" />
            </button>
          )}
          <HeadlineH2 text={pageName} />
        </div>
        <button onClick={() => setToggle(true)}>
          <HiOutlineMenuAlt3 className="text-2xl text-tertiary-700" />
        </button>
      </nav>
      {toggle && <NavigationMenu setToggle={setToggle} />}
    </>
  );
};

export default Navigation;
