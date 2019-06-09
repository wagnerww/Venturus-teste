import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.i.attrs({
  className: props => props.icon
})`
  color: ${Colors.Icon.Label};
  font-size: 3em;
`;
