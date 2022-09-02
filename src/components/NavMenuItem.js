import { Link } from "react-router-dom";
import HeadlineH2 from "./HeadlineH2";

const NavMenuItem = ({ destination, text, onClick }) => {
  return (
    <li className="mb-6">
      <Link to={destination} onClick={onClick}>
        <HeadlineH2 text={text} />
      </Link>
    </li>
  );
};

export default NavMenuItem;
