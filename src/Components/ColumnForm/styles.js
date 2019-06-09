import styled from "styled-components";

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

export const Span = styled.span`
  margin-bottom: 5px;
  font-size: 1em;
`;
