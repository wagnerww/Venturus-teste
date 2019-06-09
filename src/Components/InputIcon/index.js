import React from "react";

import { Container, Input } from "./styles";

const InputForm = ({ col, icon, ...Options }) => (
  <Container col={col}>
    <i className="fas fa-search" />
    <Input {...Options} />
  </Container>
);

export default InputForm;
