import React from "react";

import { Container } from "./styles";

const Button = ({ Label, tipo, ...options }) => (
  <Container tipo={tipo} {...options}>
    {Label}
  </Container>
);

export default Button;
