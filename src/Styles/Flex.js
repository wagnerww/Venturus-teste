import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1.2em;
  padding-left: ${props => (!!props.col ? "5px" : "0px")};
  padding-right: ${props => (!!props.col ? "5px" : "0px")};
  /* 12 quadros */
  flex-basis: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
  max-width: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};

  & > span {
    margin-bottom: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2em;
  padding-left: ${props => (!!props.col ? "5px" : "0px")};
  padding-right: ${props => (!!props.col ? "5px" : "0px")};
  /* 12 quadros */
  flex-basis: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
  max-width: ${props => (!!props.col ? (100 / 12) * props.col + "%" : "100%")};
`;
