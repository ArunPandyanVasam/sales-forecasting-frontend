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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/train/file" },
    { label: "Blog", to: "/train/manual" },
  ];

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Box display="flex" alignItems="center" className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <Typography variant="h6" className={styles.navbarTitle}>
            Pepper
          </Typography>
        </Box>

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
          <Box display="flex">
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={Link}
                to={item.to}
                className={styles.navButton}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
