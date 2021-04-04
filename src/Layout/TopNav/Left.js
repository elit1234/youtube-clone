import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/user";

const Container = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  margin-left: 1em;
  font-family: "Roboto", sans-serif;
`;

const CountryCode = styled.div`
  color: #818181;
  font-size: 0.75em;
  padding-left: 0.25em;
  padding-bottom: 0.75em;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  padding-left: 2em;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 801px) {
    display: none;
  }
`;

const Svg = styled.svg`
  &:hover {
    fill: #818181;
  }
  fill: #fff;
  transition: fill 0.3s ease-in-out;
`;

const MenuIcon = () => {
  return (
    <Svg viewBox="0 0 100 80" width="20" height="20">
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </Svg>
  );
};

const Left = () => {
  const dispatch = useDispatch();
  const sideNav = useSelector((state) => state.user.showSide);

  const handleMenuClick = () => {
    if (sideNav) dispatch(actions.hideNav());
    else dispatch(actions.showNav());
  };

  return (
    <Container>
      <IconWrapper onClick={() => handleMenuClick()}>
        <MenuIcon />
      </IconWrapper>
      <LogoWrapper>
        <CountryCode>NZ</CountryCode>
      </LogoWrapper>
    </Container>
  );
};

export default Left;
