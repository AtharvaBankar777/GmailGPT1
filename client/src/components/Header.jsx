import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune as TuneIcon,
  Search as SearchIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  MoreHorizTwoTone as MoreHorizTwoToneIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";
import { useState } from "react";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWraper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 10,
  minWidth: 700,
  maxWidth: 750,
  height: 48,
  display: "flex",
  textAlign: "center",
  justifyContent: "space-between",
  "& > div": {
    width: "100%",
  },
});

const OptionWraper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: 20,
  },
});

const Header = ({toggleDrawer}) => {
  
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />

          <img
            src={gmailLogo}
            alt="logo"
            style={{ width: 120, marginLeft: 20 }}
          />
          <SearchWraper>
            <SearchIcon color="action" style={{ padding: 10 }} />
            <InputBase color="action" placeholder="Search Mail" />
            <TuneIcon color="action" style={{ padding: 10 }} />
          </SearchWraper>

          <OptionWraper>
            <HelpOutlineOutlinedIcon color="action" />
            <SettingsOutlinedIcon color="action" />
            <MoreHorizTwoToneIcon color="action" />
            <AccountCircleOutlinedIcon color="action" />
          </OptionWraper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
