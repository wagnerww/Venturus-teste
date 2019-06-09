import styled from "styled-components";
import Colors from "../../Styles/Colors";

const espacamentoDiv = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;

export const Header = styled(espacamentoDiv)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const BallIcon = styled.i.attrs({
  className: "fas fa-volleyball-ball fa-2x"
})``;

export const DivIcon = styled.div`
  border-radius: 5px;
  margin-right: 1em;
  padding: 10px;
  background: ${Colors.Icon.Label};
  color: ${Colors.Icon.Label2};
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  padding: 10px;
  border-radius: 50%;
  margin-right: 1em;
  border: 1px solid ${Colors.Border.Primary};
`;

export const DownIcon = styled.i.attrs({
  className: "fas fa-chevron-down"
})`
  margin-left: 1em;
`;

export const SportsDetails = styled(espacamentoDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${Colors.Background.Cabecalho};
  min-height: 120px;
  width: 100%;
`;

export const Conteudo = styled(espacamentoDiv)`
  padding-bottom: 100px;
`;
