import React,{useState} from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import "animate.css";
function Section(props) {

  const { title, description, leftButton, rightButton, backgroundImg } = props;
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow className="ani" src="/images/down-arrow.svg" />
      </Buttons>

    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const LeftButton = styled.div`
  background-color: rgb(77, 77, 77);
  width: 250px;
  margin: 10px;
  height: 30px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.85;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`;
const Buttons = styled.div``;
