import styled from "styled-components";
import Colors from "../../Styles/Colors";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const LinhaCabecalho = styled.tr`
  font-weight: bold;
  & > td {
    padding: 15px;
    border-bottom: 1px solid ${Colors.Grid.Activated};
  }
`;

export const LinhaCorpo = styled(LinhaCabecalho)`
  background: ${Colors.Grid.Cor};
  font-weight: normal;
  &:nth-child(even) {
    background: ${Colors.Grid.Cor2};
  }

  &:hover {
    background: ${Colors.Grid.Activated};

    & > td > i {
      opacity: 1;
    }
  }

  & > td {
    border-bottom: none;
  }

  & > td > i {
    opacity: 0;
    cursor: pointer;
    color: ${Colors.Icon.Label};
  }
`;
