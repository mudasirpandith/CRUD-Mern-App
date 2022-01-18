import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
export default function CustomDrawer(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawerBack = () => {
    setIsOpen((prevState) => !prevState);
  };
  async function logout() {
    const res = await fetch("/logout", {
      method: "POST",
    });
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      navigate("/login");
    }
  }
  function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Leaders
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
          duration={400}
        >
          <center>
            <p className="user-profile">{props.name}</p>
            <p className="user-profile">{props.email} </p>
          </center>

          <Button color="inherit" onClick={logout}>
            LogOut
          </Button>
        </Drawer>
      </Box>
    );
  }

  return (
    <>
      <ButtonAppBar />
    </>
  );
}
