import {FC} from "react";
import spinner from '../../../assets/images/spinner.svg'
import styled from "styled-components";


export const Spinner: FC = () => {
    return (
        <Img src={spinner} alt=""/>
    )
}


const Img = styled.img`
  margin: 0 auto;
  max-width: 150px;
  width: 100%;
  @media ${({theme}) => theme.media._768} {
    max-width: 100px;
  }

`