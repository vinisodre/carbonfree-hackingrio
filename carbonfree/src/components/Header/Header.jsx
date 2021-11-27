import * as S from "./styles"
import Logo from "../Logo/Logo"
import LoginButton from "../LoginButton/LoginButton"

const Header= () => {

  return <>
  <S.Container>
  <Logo/>
  <S.NavBar>
    <button>início</button>
    <button>como funciona</button>
  </S.NavBar>
  <LoginButton/>
  </S.Container>
  <S.BodyGap/>
  </>
  
}

export default Header