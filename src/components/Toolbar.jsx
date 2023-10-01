import React from "react";
// react-icons
import { IoMdRefresh } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { BsPlusSquareDotted } from "react-icons/bs";

const Toolbar = () => {
  return (
    <div id="toolbar">
      <FaCodeBranch className="toolbar--logo" />
      <div id="toolbar--url">
        <BiSolidLockAlt className="toolbar--url__icon" />
        <a href={`https://github.com/`} target="_blank">
          github.com
        </a>
        <IoMdRefresh className="toolbar--url__icon" />
      </div>
      <BsPlusSquareDotted className="toolbar--logo" />
    </div>
  );
};

export default Toolbar;
