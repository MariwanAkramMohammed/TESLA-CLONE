import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SelectCar from "../features/Car/CarSlice";
function Header() {
  // const cars = useSelector(SelectCar);
  // console.log(cars);
  const [SideShow, setSideShow] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Tesla Account</a>
        <CustomIcon onClick={() => setSideShow(!SideShow)} />
      </RightMenu>
      <SideBarNav Show={SideShow}>
        <CustomButoon>
          <CloseButton onClick={() => setSideShow(false)} />
        </CustomButoon>
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-In</a>
        </li>
        <li>
          <a>Test Drive</a>
        </li>
        <li>
          <a>Insurance</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadster</a>
        </li>
        <li>
          <a>Semi</a>
        </li>
        <li>
          <a>Charging</a>
        </li>
      </SideBarNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 10px;
  }
`;
const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
  margin: 0 10px;
`;
const SideBarNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  transform: ${(props) => (props.Show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    display: inline-block;
    padding: 15px 0;
    width: 220px;
    cursor: pointer;

    border-radius: 40px;
    a {
      font-weight: 600;
    }
    &:hover {
      background: rgba(88, 88, 88, 0.07);
    }
  }
`;
const CustomButoon = styled.div`
  display: flex;
  margin-left: auto;
`;
const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
