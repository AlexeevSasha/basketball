import {FC, ButtonHTMLAttributes} from "react";
import styled from "styled-components";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    btnAdd?: boolean;
}

export const Button: FC<ButtonsProps> = ({children, btnAdd, ...attr}) => {
    return (
        <ButtonStyle btnAdd={btnAdd} {...attr}> {children}</ButtonStyle>
    )
};

const ButtonStyle = styled.button<{ btnAdd?: boolean }>`
  background-color: ${({theme}) => theme.colors.red};
  border: none;
  cursor: pointer;
  height: 40px;
  color: white;
  font-family: inherit;
  font-size: 15px;
  max-width: 366px;
  font-weight: 500;
  width: 100%;
  border-radius: 4px;
  transition: all .2s linear;

  &:hover {
    background-color: ${({theme}) => theme.colors.lightRed};
  }
;

  &:active {
    background-color: ${({theme}) => theme.colors.darkRed};
    transform: translateY(2px);
  }
;

  &:disabled {
    color: ${({theme}) => theme.colors.lightestGrey};
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    cursor: default;
  }
;

  ${({btnAdd}) => btnAdd && `
    max-width: 104px;
    width: 100%;
    @media (max-width: 768px) {
    max-width: none
  }
`}
`