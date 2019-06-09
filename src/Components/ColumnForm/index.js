import React from "react";

import { Container, Span } from "./styles";

const InputForm = ({ col, label, component: Component }) => (
  <Container col={col}>
    <Span>{label}</Span>
    {Component ? <Component /> : null}
  </Container>
);

export default InputForm;
