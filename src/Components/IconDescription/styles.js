import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5em;
  max-width: 400px;
  @media only screen and (min-width: 280px) and (max-width: 700px) {
    margin-right: 2em;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.Font.Label};
  margin-top: 15px;

  & > span {
    margin-left: 15px;
  }
`;

export const Title = styled.span`
  color: ${Colors.Font.LabelTitle};
  font-size: 1.3em;
`;
