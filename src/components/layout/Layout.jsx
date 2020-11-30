import { Box, Container } from "@material-ui/core";
import React from "react";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <Box>
      <Navigation />
      <Container>{children}</Container>
    </Box>
  );
}

export default Layout;
