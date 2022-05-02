import {FC} from "react";
import {Link} from "react-router-dom";
import {Error404Svg} from "../SVGConstans/SVG";
import styled from "styled-components";


export const Error404: FC = () => {
    return (
        <ErrorWrapper>
            <ErrorContentWrapper>
                <ErrorImg><Error404Svg/></ErrorImg>
                <ErrorTitle>Page not found</ErrorTitle>
                <ErrorText>Sorry, we can’t find what you’re looking for</ErrorText>
                <Link to='/'><ErrorGoBack>Go back to the main page</ErrorGoBack></Link>
            </ErrorContentWrapper>

        </ErrorWrapper>
    )
}

const ErrorWrapper = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ErrorContentWrapper = styled.div`
  margin: 0 45px;
  text-align: center;
`
const ErrorImg = styled.div`
  & > svg {
    max-width: 380px;
    height: 100%;
    width: 100%;
  }
`
const ErrorTitle = styled.h3`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  margin-top: 40px;
  color: ${({theme}) => theme.colors.lightestRed};
  @media ${({theme}) => theme.media._768} {
    font-size: 24px;
    line-height: 24px;
  }
`
const ErrorText = styled.p`
  color: ${({theme}) => theme.colors.grey};
  font-size: 24px;
  font-weight: 400;
  margin-top: 24px;
  @media ${({theme}) => theme.media._768} {
    font-size: 15px;
    margin-top: 16px;
  }
`
const ErrorGoBack = styled.h4`
  color: ${({theme}) => theme.colors.red};
  margin-top: 16px;
  font-weight: normal;
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: var(--lightest-red);
  }
`