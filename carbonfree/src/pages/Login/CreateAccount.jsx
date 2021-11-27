import * as S from "./styles";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const CreateAccount = () => {
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
          <div>
            <S.Label>
              confirmar <b>senha</b>
            </S.Label>
            <S.Input type="password" />
          </div>
          <div>
            <S.Label>email</S.Label>
            <S.Input />
          </div>
          <Link to="/login">já tem conta? clique aqui</Link>
          <S.SubmitButton>Criar Conta</S.SubmitButton>
        </S.FormContainer>
      </S.ContentContainer>
    </S.Container>
  );
};
export default CreateAccount;
