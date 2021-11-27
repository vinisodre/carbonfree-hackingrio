import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <S.FormContainer onSubmit={(event) => event.preventDefault()}>
          <div>
            <S.Label>
              nome de <b>usuário</b>
            </S.Label>
            <S.Input />
          </div>
          <div>
            <S.Label>senha</S.Label>
            <S.Input type="password" />
          </div>
          <Link to="/">esqueci minha senha</Link>
          <S.SubmitButton>Enviar</S.SubmitButton>
          <S.CreateAccountButton
            onClick={() => {
              navigate("/login/criar-conta");
            }}
          >
            Criar Conta
          </S.CreateAccountButton>
        </S.FormContainer>
      </S.ContentContainer>
    </S.Container>
  );
};
export default Login;
