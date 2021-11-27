import * as S from "./styles";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.svg";

const LoginButton = () => {
  return (
    <>
      <S.Container>
        <Link to="/login">
          <img src={user} alt="usuário" /> login
        </Link>
      </S.Container>
    </>
  );
};

export default LoginButton;
