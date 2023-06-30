import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { LogoDark } from "../../assets/img/LogoDark";
import { MenuIcon } from "../../assets/img/MenuIcon";
import { OptionSelector } from "./OptionSelector";
import { countryData, languageData } from "./selectData";
import { ContactButton } from "./ContactButton";
import { Cards } from "./Cards";
import { Button, Stack } from "@mui/material";
import { HandShake } from "../../assets/img/HandShake";
import { Profile } from "../../assets/img/Profile";

export const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: "48px 30px 18px", flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar disableGutters>
          <LogoDark sx={{ mr: 5.12, width: "185px", height: "60px" }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: -0.5 }}
          >
            <MenuIcon sx={{ width: "60px", height: "60px" }} />
          </IconButton>

          <Box sx={{ marginRight: "12px" }}>
            <OptionSelector data={languageData} />
            <OptionSelector data={countryData} />
          </Box>

          <Box sx={{ marginRight: "32px" }}>
            <ContactButton />
          </Box>

          <Box sx={{ marginRight: "55px" }}>
            <Cards />
          </Box>

          <Button
            variant="contained"
            color="info"
            sx={{marginRight: '18px', minWidth: "180px", padding: "14px 0" }}
            startIcon={<HandShake sx={{ width: "32px", height: "32px" }} />}
          >
            Партнерам
          </Button>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ padding: 0 }}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: 1,
                    backgroundColor: "#ECECEC",
                  }}
                >
                  <Profile sx={{ width: "30px", height: "30px" }} />
                </Stack>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
