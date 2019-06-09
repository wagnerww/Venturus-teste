import React from "react";

import { Container, Input, Span, Small, Info } from "./styles";

const InputForm = ({
  col,
  label,
  errorView,
  isRequired,
  description,
  ...Options
}) => (
  <Container col={col}>
    <Info>
      <Span isRequired={isRequired}>{label}</Span>
      <Small>{description}</Small>
    </Info>
    <Input isValid={!errorView} {...Options} />
    <Small>{errorView}</Small>
  </Container>
);

export default InputForm;
