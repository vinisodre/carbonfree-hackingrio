import * as S from "./styles"
import user from "../../assets/images/user.svg"

const LoginButton = () =>{
  return <><S.Container>
    <S.Button><img src={user}/> login</S.Button>
    </S.Container></>
}

export default LoginButton