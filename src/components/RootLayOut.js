import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";

const RootLayOut = () => {
  return (
    <>
      <Container>
        <Nav />
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayOut;
