import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="flex justify-end px-5 py-2 mb-3 bg-[#9eada2]">
        <ul className="flex font-semibold">
          <li className="px-5">
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
