"use client";
import { Container, Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
    <Container>
      <Typography variant="h6" align="center" gutterBottom>
        Footer Title
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Container>
  </Box>
);
