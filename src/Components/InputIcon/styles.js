import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* 12 quadros */
  flex-basis: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
  max-width: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
  border: 1px solid ${Colors.Input.border};
  border-radius: 3px;
  padding-left: 10px;
`;

export const Input = styled.input`
  font-size: 1em;
  padding: 10px;
  width: 100%;
  background-color: ${Colors.Input.Fundo};
  color: ${Colors.Input.Text};
  border: none;
  &:focus {
    border-color: ${Colors.Input.borderActivate};
  }
`;
