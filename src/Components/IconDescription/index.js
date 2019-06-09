import React from "react";

import { Container, ContainerIcon, Title } from "./styles";
import Icon from "../Icon";

const IconDetail = ({ titulo, descricao, icone }) => (
  <Container>
    <Title>{titulo}</Title>
    <ContainerIcon>
      <Icon icone={icone} />
      <span>{descricao}</span>
    </ContainerIcon>
  </Container>
);

export default IconDetail;
