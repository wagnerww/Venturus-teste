import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5em;
  @media only screen and (min-width: 280px) and (max-width: 700px) {
    margin-right: 2em;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.Font.Label};
  margin-left: 10px;
  padding-top: 15px;
`;

export const Descricao = styled.small`
  color: ${Colors.Font.LabelIcon};
`;
