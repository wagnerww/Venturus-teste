import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const Titulo = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

export const Box = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${Colors.CheckBox.Border};
  border-radius: 5px;

  & > i {
    opacity: 0;
  }
`;

export const Check = styled.input`
  opacity: 0;
  width: 0px;

  &:checked ~ ${Box} {
    border: 1px solid ${Colors.CheckBox.Checked};

    & > i {
      opacity: 1;
    }
  }
`;
