import styled from "styled-components";
import { mobile } from "../../../utils/responsive";

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  max-width: 675px;
  gap: 18px;
  margin-bottom: 60px;
  ${mobile({ maxWidth: 308 })}
`;
const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  width: 250px;
  ${mobile({ width: 308 })}
`;
const Input = styled.input`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0px 4px 16px -3px ${({ theme }) => theme.palette.secondary.light};
  border-radius: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.palette.primary.darker};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  border: 0;
  outline: 0;
  transition: all 150ms linear;
  &[name="name"] {
    width: 90vw;
    max-width: 405px;
    ${mobile({ maxWidth: 308 })}
  }
  &[name="number"] {
    width: 100px;
  }
  &[name="type"] {
    width: 130px;
    ${mobile({ width: 186 })};
  }
  &:focus {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.secondary.main};
  }
`;
export {
  Container,
  Right,
  Input,
}