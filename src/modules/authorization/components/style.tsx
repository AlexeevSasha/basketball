import styled from "styled-components";
import {Link} from "react-router-dom";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 24px;
  background: white;
`
export const ImageSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.lightBlue};
  width: 140%;
  height: 100vh;
  svg {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    margin: 0 25px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const FormContainer = styled.div`
  max-width: 366px;
  width: 100%;
`

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.blue};
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
`
export const Form = styled.form`
  display: grid;
  gap: 24px;
  margin-top: 32px;
`
export const Text = styled.div`
  margin-top: 24px;
  text-align: center;
`
export const TextLink = styled(Link)`
  color: ${({theme}) => theme.colors.red};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`