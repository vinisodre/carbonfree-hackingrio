import Header from "../";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import * as S from './styles';

function UserDashboard() {
  return (
    <S.App>
      <Header />
      <Sidebar/>
      <Main />
    </S.App>
  );
}

export default UserDashboard;
