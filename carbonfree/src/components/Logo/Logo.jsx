import * as S from "./styles"
import plant from "../../assets/images/plant.svg"

const Logo = () =>{

  return <S.Container>
  <S.LogoText>
    carbon<strong>free</strong>
  </S.LogoText>
  <img src={plant}/>
  </S.Container>
}

export default Logo