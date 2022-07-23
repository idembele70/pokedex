import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { likedLength$ } from "../../rxjs/rxjs";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../utils/globalFunctions";
import ThumbUp from "../tools/ThumbUp";

const hidenCard = keyframes`
  0% {
    display: flex;
    opacity: 1;
  }
  90% {
    display: flex;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 90vw;
  max-width: 307px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  min-height: 168px;
  gap: 32px;
  padding: 25px 35px 25px 25px;
  box-sizing: border-box;
  position: relative;
  opacity: ${({ opacity }) => opacity};
  display: ${({ display }) => display};
  transition: all 350ms linear;
`;
const Left = styled.div`
  flex: 1;
  max-height: 117px;
  max-width: 126px;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const RightTop = styled.div`
  display: flex;
  gap: 7px;
  & > * {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    margin: 0;
  }
`;
const Id = styled.h5`
  color: #9e9e9e;
  font-weight: 900;
`;
const Name = styled.h5`
  text-transform: uppercase;
  color: #000000;
  font-weight: 900;
`;
const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > * {
    margin: 0;
  }
`;
const Type = styled.h6`
  background-color: #${(props) => props.bgColor};
  border-radius: 9.5px;
  font-size: 8px;
  line-height: 9px;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding: 4px 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;
const IconContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  bottom: 10px;
  right: 10px;
  height: 29px;
  width: 29px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 350 linear;
  background: ${(props) =>
    props.liked
      ? "linear-gradient(202.48deg, #F2F2F2 7.57%, #CFCFCF 90.41%)"
      : "transparent"};
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const Card = (props) => {
  const { img, alt, id, name, types } = props;

  const handleError = (e) => {
    e.preventDefault();
    e.target.src = `${process.env.PUBLIC_URL}/assets/mock/error404.png`;
  };
  const left = useMemo(
    () => (
      <Left>
        <Image onError={handleError} src={img} alt={alt} />
      </Left>
    ),
    [img, alt]
  );
  const rightTop = useMemo(
    () => (
      <RightTop>
        <Id>{id}</Id>
        <Name>{name}</Name>
      </RightTop>
    ),
    [id, name]
  );

  const rightbottom = useMemo(
    () => (
      <RightBottom>
        {types.map((type) => (
          <Type key={type.name} bgColor={type.color}>
            {type.name}
          </Type>
        ))}
      </RightBottom>
    ),
    [types]
  );
  const [liked, setLiked] = useState(false);
  const location = useLocation();
  const [opacity, setOpacity] = useState(1);
  const [display, setdisplay] = useState("flex");
  const handleLike = useCallback(() => {
    if (location.pathname === "/liked" && liked) {
      setOpacity(0);
      setTimeout(() => {
        setdisplay("none");
      }, 400);
    } else setOpacity(1);
    setLiked(!liked);
    const likedPokemons = getFromLocalStorage("likedPokemons");
    if (likedPokemons) {
      const isLiked = likedPokemons.findIndex((v) => v === id) !== -1;
      if (isLiked) {
        const newLikedPokemons = likedPokemons.filter((v) => v !== id);
        addToLocalStorage(newLikedPokemons);
      } else addToLocalStorage([...likedPokemons, id]);
    } else {
      addToLocalStorage([id]);
    }
    console.log(getFromLocalStorage("likedPokemons")?.length);
    likedLength$.next(getFromLocalStorage("likedPokemons")?.length || 0);
  }, [liked, id, location]);
  useEffect(() => {
    const likedPokemons = getFromLocalStorage("likedPokemons");
    if (likedPokemons) {
      const isLiked = likedPokemons?.findIndex((pid) => pid === id) !== -1;
      setLiked(isLiked);
    }
  }, [id]);
  const icons = useMemo(
    () => (
      <IconContainer onClick={handleLike} liked={liked}>
        <ThumbUp liked={liked} />
      </IconContainer>
    ),
    [liked, handleLike]
  );
  return (
    <Container opacity={opacity} display={display}>
      {left}
      <Right>
        {rightTop}
        {rightbottom}
      </Right>
      {icons}
    </Container>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
};
Card.defaultProps = {
  liked: false,
};

export default React.memo(Card);
