import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { type } from '@testing-library/user-event/dist/type';
import { loading$ } from '../../rxjs/rxjs';
const Container = styled.div`
  width: 90vw;
  max-width: 307px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  min-height: 168px;
  gap: 32px;
  padding: 25px 35px 25px 25px;
  box-sizing: border-box;
  position: relative;
`;
const Left = styled.div`
flex:1;
  max-height: 117px;
  max-width: 126px;
  display: flex;
  justify-content: center;
  `;
const Image = styled.img`
  max-height:100%;
  max-width:100%;
  object-fit: contain;
`;
const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const RightTop = styled.div`
  display:flex;
  gap: 7px;
  & > * {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
    margin: 0;
  }
`;
const Id = styled.h5`
color: #9E9E9E;
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
  background-color: #${props => props.bgColor};;
  border-radius: 9.5px;
  font-size: 8px;
  line-height: 9px;
  letter-spacing: 0.04em;
  color:#FFFFFF;
  padding: 4px 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;
const IconContainer = styled.div`
  position:absolute;
  background-color: #FFFFFF;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  bottom: 10px;
  right: 10px;
  height: 29px;
  width: 29px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.liked ? "linear-gradient(202.48deg, #F2F2F2 7.57%, #CFCFCF 90.41%)" : "transparent"};
`;
const Icon = styled.img`
`;
const Card = props => {
  const { liked, img, alt, id, name, types } = props
  const left = useMemo(() => <Left>
    <Image src={img} alt={alt} />
  </Left>, [img, alt])
  const rightTop = useMemo(() =>
    <RightTop>
      <Id>{id}</Id>
      <Name>{name}</Name>
    </RightTop>, [id, name])

  const rightbottom = useMemo(() =>
    <RightBottom>
      {
        types.map(
          type => <Type key={type.name} bgColor={type.color}>
            {type.name}
          </Type>
        )
      }
    </RightBottom>, [types])


  const icons = useMemo(() =>
    <IconContainer liked={liked} >
      {liked ?
        <Icon src={`${process.env.PUBLIC_URL}/assets/icons/thumbUpWhite.png`} alt="thumb-up-grey" />
        : <Icon src={`${process.env.PUBLIC_URL}/assets/icons/thumbUpGrey.png`} alt="thumb-up-white" />}
    </IconContainer>
    , [liked])
  return (
    <Container>
      {left}
      <Right>
        {rightTop}
        {rightbottom}
      </Right>
      {icons}
    </Container>
  )
}

Card.propTypes = {
  liked: PropTypes.bool,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired

}
Card.defaultProps = {
  liked: false
}

export default React.memo(Card)