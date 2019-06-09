import styled from "styled-components";
import { Form } from "formik";
import Colors from "../../Styles/Colors";

export const FormGroup = styled(Form)`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid ${Colors.Border.Secundary};
  padding-top: 40px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerDays = styled.div`
  display: flex;

  width: 100%;
`;
