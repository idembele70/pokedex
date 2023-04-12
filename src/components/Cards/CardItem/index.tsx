import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ThumbUp from "../ThumbUp";
import {
  Container,
  IconContainer,
  Id,
  Image,
  Left,
  Name,
  Right,
  RightBottom,
  RightTop,
  Type,
} from "./CardItem.style";
import {
  checkFromLocalStorage,
  toggleToLocalStorage,
} from "../../../utils/globalFunctions";

interface ITypes {
  name: string;
  color: string;
}
interface CardItemProps {
  img: string;
  alt: string;
  id: string;
  name: string;
  types: Array<ITypes>;
}
const CardItem: React.FC<CardItemProps> = (props) => {
  const { img, alt, id, name, types } = props;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/mock/error404.png`;
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
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  // check if is liked
  useEffect(() => {
    const isLiked = checkFromLocalStorage(id);
    setLiked(isLiked);
  }, []);
  //like function handler
  const handleLike = () => {
    setLiked(!liked);
    toggleToLocalStorage(id);
    if (pathname === "/liked") {
      setIsVisible(false);
    }
  };
  const icons = useMemo(
    () => (
      <IconContainer onClick={handleLike} liked={liked}>
        <ThumbUp liked={liked} />
      </IconContainer>
    ),
    [liked]
  );
  return isVisible ? (
    <Container>
      {left}
      <Right>
        {rightTop}
        {rightbottom}
      </Right>
      {icons}
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(CardItem);
