import { Drawer, styled } from "@mui/material";
import Sidebarcontent from "./Sidebarcontent";

const SideBar = ({openDrawer}) => {
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        hideBackdrop={true}
        modelprops={{ keepMounted: true }}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            marginTop: "64px",
            width: 250,
            background: "#F5F5F5",
            borderRight: "none",
            height: "calc(100vh - 64px)",
          },
        }}
      >
        <Sidebarcontent />
      </Drawer>
    </>
  );
};
export default SideBar;
