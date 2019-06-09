import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px 0px 20px 0px;
`;

export const Border = styled.div`
  width: 100%;
  border: 1px solid ${Colors.Border.Secundary};
  margin-right: ${props => (props.isFilter ? "30px" : "0px")};
`;

export const Title = styled.span`
  font-size: 2.2em;
  padding-right: 20px;
`;
