import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import * as S from './styles';

function Dashboard() {
  return (
    <S.Container>
      <Sidebar/>
      <Main />
    </S.Container>
  );
}

export default Dashboard;
