"use client";

import React from "react";
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const menuItem = [
  { label: "메뉴1", href: "/" },
  { label: "메뉴2", href: "/" },
  { label: "메뉴3", href: "/" },
  { label: "메뉴4", href: "/" },
];

export const MenuAppBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: 240 },
              }}
            >
              <List>
                {menuItem.map((text, index) => (
                  <Link
                    href={"/"}
                    key={index}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItem>
                      <ListItemText primary={text.label} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" href="/">
                Logo
              </Button>
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              {menuItem.map((text, index) => (
                <Link
                  href={"/"}
                  key={index}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">{text.label}</Button>
                </Link>
              ))}
            </Box>
            {/* 오른쪽 검색 아이콘 */}
            <IconButton edge="end" color="inherit">
              <SearchIcon />
            </IconButton>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
};
