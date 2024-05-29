import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import SideBar from "../components/SideBar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box display="flex" style={
          openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
        }>
        <SideBar openDrawer={openDrawer} />
        <Outlet context={{ openDrawer }} />
      </Box>
    </>
  );
};

export default Main;
