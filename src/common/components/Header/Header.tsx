import {FC} from "react";
import logo from '../../../assets/images/header-logo.png';
import {MenuIcon, ProfileIcon} from "../";
import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
    name?: string;
    toggle?: boolean;
    clickToggle?: () => void;
};

export const Header: FC<Props> = ({name, toggle, clickToggle}) => {
    return (
        <HeaderWrapper>
            <HeaderMenu toggle={toggle} onClick={clickToggle}><MenuIcon/></HeaderMenu>
            <HeaderLogo to='teams'>
                <LogoImg src={logo} alt="logo"/>
            </HeaderLogo>
            <HeaderProfile>
                <HeaderName>{name || 'Name'}</HeaderName>
                <HeaderAvatar><ProfileIcon/></HeaderAvatar>
            </HeaderProfile>
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0 50px;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
  width: 100%;
  height: 80px;
  @media ${({theme}) => theme.media._768} {
    justify-content: center;
    height: 62px;
  }
`

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  @media ${({theme}) => theme.media._768} {
    display: none;
  }
`
const HeaderName = styled.span`
  color: ${({theme}) => theme.colors.darkGrey};
  margin-right: 16px;
`

const HeaderAvatar = styled.div`
  height: 40px;

  & > svg {
    width: 40px;
    height: 40px;
  }
`
const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 100%;
  @media ${({theme}) => theme.media._768} {
    width: 150px;
  }
`

const HeaderMenu = styled.button<{ toggle?: boolean }>`
  display: none;
  @media ${({theme}) => theme.media._768} {
    display: block;
    position: absolute;
    padding: 0;
    border: none;
    height: 24px;
    background: transparent;
    left: 12px;
    cursor: pointer;
    top: 50%;
    border-radius: 50%;
    transition: all .2s linear;
    transform: translateY(-50%);
    ${({toggle}) => toggle && `
    transform: translateY(-50%)  rotate(90deg);
    `}
  }
}
`


