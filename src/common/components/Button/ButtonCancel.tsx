import {FC, ButtonHTMLAttributes} from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
}

export const ButtonCancel: FC<Props> = ({children, ...attr}) => {
    return (
        <ButtonCancelStyle {...attr} >{children ? children : 'Cancel'}</ButtonCancelStyle>
    )
}

const ButtonCancelStyle = styled.button`
  background: none;
  border: 1px solid ${({theme}) => theme.colors.lightGrey};
  cursor: pointer;
  height: 40px;
  color: ${({theme}) => theme.colors.lightGrey};
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  max-width: 171px;
  width: 100%;
  border-radius: 4px;
  transition: all .2s linear;

  &:hover {
    background-color: ${({theme}) => theme.colors.lightestGrey};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.lightGrey};
    color: ${({theme}) => theme.colors.grey};
    transform: translateY(2px);
  }

  &:disabled {
    color: ${({theme}) => theme.colors.lightestGrey};
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    cursor: default;
  }
`
