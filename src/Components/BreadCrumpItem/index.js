import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const BreadCrumpItem = ({ title, page }) => (
  <Container>
    <i className="fas fa-chevron-right" />
    <Link to="/">{title}</Link>
  </Container>
);

export default BreadCrumpItem;
