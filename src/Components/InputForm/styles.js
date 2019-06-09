import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
  padding-left: ${props => (!!props.col ? "5px" : "0px")};
  padding-right: ${props => (!!props.col ? "5px" : "0px")};
  /* 12 quadros */
  flex-basis: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
  max-width: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${Colors.Input.border};
  font-size: 1em;
  padding: 10px;
  width: 100%;
  background-color: ${Colors.Input.Fundo};
  color: ${Colors.Input.Text};

  border-color: ${props => (props.isValid ? "none" : Colors.Input.borderError)};

  &:focus {
    border-color: ${Colors.Input.borderActivate};
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  margin-bottom: 5px;
  font-size: 1em;
`;

export const Small = styled.small`
  color: ${Colors.Input.textError};
  margin-top: 2px;
  height: 5px;
`;
