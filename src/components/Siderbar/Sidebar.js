import React from "react";
import "../../componentsCss/Sidebar.css"; // Import your CSS file for styling

function Sidebar({ isOpen, children }) {
  return (
    <div className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      {isOpen && children}
    </div>
  );
}

export default Sidebar;
