import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.button`
  background: ${props =>
    props.tipo === "secundary"
      ? Colors.Button.Secundary
      : Colors.Button.Primary};
  color: ${props =>
    props.tipo === "secundary"
      ? Colors.Button.LabelSecundary
      : Colors.Button.LabelPrimary};

  padding: 10px 20px 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  border: 0px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px
      ${props =>
        props.tipo === "secundary"
          ? Colors.Button.SecundaryHover
          : Colors.Button.PrimaryHover};
  }
`;
