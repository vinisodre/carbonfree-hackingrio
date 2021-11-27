import { useState } from "react";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import LoginButton from "../LoginButton/LoginButton";

const Header = () => {
  const location = useLocation();
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [howWorksIsActive, setHowWorksIsActive] = useState(false);
  return (
    <>
      <S.Container>
        <Logo />
        <S.NavBar>
          <Link
            to="/"
            className={
              (location.pathname === "/" && homeIsActive) || homeIsActive
                ? "active"
                : null
            }
            onMouseEnter={() => {
              setHomeIsActive(true);
              setHowWorksIsActive(false);
            }}
            onMouseLeave={() => {
              setHomeIsActive(location.pathname === "/" ? true : false);
              setHowWorksIsActive(
                location.pathname === "/como-funciona" ? true : false
              );
            }}
          >
            início
          </Link>
          <Link
            to="/como-funciona"
            className={
              (location.pathname === "/como-funciona" && howWorksIsActive) ||
              howWorksIsActive
                ? "active"
                : null
            }
            onClick={() => {
              setHowWorksIsActive(true);
              setHomeIsActive(false);
            }}
            onMouseEnter={() => {
              setHowWorksIsActive(true);
              setHomeIsActive(false);
            }}
            onMouseLeave={() => {
              setHomeIsActive(location.pathname === "/" ? true : false);
              setHowWorksIsActive(
                location.pathname === "/como-funciona" ? true : false
              );
            }}
          >
            como funciona
          </Link>
        </S.NavBar>
        <LoginButton />
      </S.Container>
      <S.BodyGap />
    </>
  );
};

export default Header;
