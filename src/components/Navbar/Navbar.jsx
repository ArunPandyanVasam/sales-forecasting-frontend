import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/train/file" },
    { label: "Blog", to: "/train/manual" },
  ];

  return (
    <>
      <AppBar position="sticky" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography
            variant="h6"
            className={styles.navbarTitle}
            style={{ flexGrow: 1 }}
          >
            <img src={logo} alt="Logo" className={styles.logo} />
            Pepper
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List className={styles.drawerList}>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.to}
                      className={styles.drawerListItem}
                      onClick={toggleDrawer}
                    >
                      <Link to={item.to} className={styles.drawerLink}>
                        <ListItemText
                          primary={item.label}
                          className={styles.drawerItemText}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={Link}
                to={item.to}
                className={styles.navButton}
              >
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
