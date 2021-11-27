import * as S from "./styles";
import Header from "../../components/Header/Header";
import planet from "../../assets/images/planet.svg";

const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.ContentContainer>
          <img src={planet} alt="planeta sustentável" />
          <S.TextContainer>
            <S.Title>
              Lorem ipsum dolor <strong>sit ame</strong>
            </S.Title>
            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </S.Paragraph>
          </S.TextContainer>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};

export default Home;
