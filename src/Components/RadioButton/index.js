import React from "react";

import { Container, Titulo, Box, Check } from "./styles";

const RadioButton = ({ descricao, ...options }) => (
  <Container>
    <Check type="radio" {...options} />
    <Box htmlFor={options.id}>
      <i className="fas fa-circle" />
    </Box>
    <Titulo htmlFor={options.id}>{descricao}</Titulo>
  </Container>
);

export default RadioButton;
