import React, { Fragment } from "react";

import {
  Header,
  BallIcon,
  DivIcon,
  DivTitle,
  Profile,
  DownIcon,
  SportsDetails,
  Conteudo
} from "./styles";

import BreadCrump from "../../Components/BreadCrump";
import IconDetail from "../../Components/IconDetail";
import Principal from "../../Pages/Principal";

const MasterPage = props => (
  <Fragment>
    <Header>
      <DivTitle>
        <DivIcon>
          <BallIcon />
        </DivIcon>
        <h3>Venturus Sports</h3>
      </DivTitle>
      <DivTitle>
        <Profile>JB</Profile>
        <span>Jason Bourne</span>
        <DownIcon />
      </DivTitle>
    </Header>
    <BreadCrump router={props} />
    <SportsDetails>
      <IconDetail
        icone="fas fa-puzzle-piece"
        tipo="Cycling"
        descricao="Sport type"
      />
      <IconDetail icone="fas fa-trophy" tipo="Advanced" descricao="Mode" />
      <IconDetail icone="fas fa-map-signs" tipo="30 miles" descricao="Route" />
    </SportsDetails>
    <Conteudo>{props.children}</Conteudo>
  </Fragment>
);

export default MasterPage;
