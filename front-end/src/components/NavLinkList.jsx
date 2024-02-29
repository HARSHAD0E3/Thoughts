/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function NavLinkList({ nav }) {
  return (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px]  text-white`}
    >
      <Link to={`${nav.id}`}>{nav.title}</Link>
    </li>
  );
}

export default NavLinkList;
