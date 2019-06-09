import React from "react";

import { Container, ContainerTitle, Descricao } from "./styles";
import Icon from "../Icon";

const IconDetail = ({ tipo, descricao, icone }) => (
  <Container>
    <Icon icone={icone} />
    <ContainerTitle>
      <Descricao>{descricao}</Descricao>
      <h2>{tipo}</h2>
    </ContainerTitle>
  </Container>
);

export default IconDetail;
