import React from "react";
import { styled, Drawer, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 6.6875rem;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 0.9375rem;
    font-weight: 600;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 1.125rem;
`;

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

function InfoDrawer({ open, setOpen, profile }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>{profile && <Profile />}</Component>
    </Drawer>
  );
}

export default InfoDrawer;
