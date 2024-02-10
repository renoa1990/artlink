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
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const menuItem = [
  { label: "인기공연", href: "/", img: "/" },
  { label: "최신공연", href: "/", img: "/" },
  { label: "공연검색", href: "/", img: "/" },
  { label: "나머지메뉴", href: "/", img: "/" },
  { label: "인기공연", href: "/", img: "/" },
  { label: "최신공연", href: "/", img: "/" },
  { label: "공연검색", href: "/", img: "/" },
  { label: "나머지메뉴", href: "/", img: "/" },
];

export default function MainBox() {
  return (
    <Container>
      <Grid container spacing={2}>
        {menuItem.map((i, index) => {
          return (
            <Grid
              item
              md={3}
              xs={12}
              onClick={() => console.log(i)}
              key={index}
            >
              <Paper
                elevation={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    elevation: 6,
                    boxShadow: (theme) => theme.shadows[6], // 'hover' 상태에서의 그림자 효과
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 1,
                    height: 300,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  이미지
                  <Typography>{i.label}</Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
