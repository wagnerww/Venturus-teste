import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.Border.Secundary};
  max-width: 50%;
  padding: 10px;
  margin: 0px -10px 15px -10px;
`;

export const BoxTitle = styled.div`
  display: flex;
`;

export const Title = styled.h4`
  margin-right: 5px;
`;
