import * as S from "./styles";
import Header from "../../components/Header/Header";
import vectorizedPlanet from "../../assets/images/vectorized-planet.svg";

const HowWorks = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.ContentContainer>
          <S.SectionContainer>
            <S.TextContainer>
              <S.Title>
                Lorem ipsum dolor sit<strong> amet, consectetur</strong>
              </S.Title>
              <S.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </S.Paragraph>
            </S.TextContainer>
            <img src={vectorizedPlanet} alt="planeta terra" />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </S.Paragraph>
            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </S.Paragraph>
          </S.SectionContainer>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};

export default HowWorks;
