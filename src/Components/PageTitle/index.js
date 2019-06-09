import React from "react";

import { Container, Border, Title } from "./styles";

const PageTitle = ({ title, filters: Component, ...props }) => (
  <Container>
    <Title>{title}</Title>
    <Border isFilter={Component} />
    {Component ? <Component {...props} /> : null}
  </Container>
);

export default PageTitle;
