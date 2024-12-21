import React, { useState } from "react";

import TopBer from "./TopBer.js";
import NavBar from "./NavBar.js";

const MainNavBer = () => {
  const [open, setOpen] = useState(false);
  const hendleclick = () => {
    setOpen(!open);
  };
  const hendleclose = () => {
    setOpen(false);
  };
  return (
    <div>
      <NavBar click={hendleclick} />
      <TopBer open={open} hendleclose={hendleclose} />
    </div>
  );
};

export default MainNavBer;
