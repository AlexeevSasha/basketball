import {FC} from "react";
import styled from "styled-components";
import {PlayersIcon, TeamsIcon, SingOutIcon, ProfileIcon} from "../";
import {NavLink} from 'react-router-dom';

interface Props {
    onClick?: () => void;
    name?: string;
};
export const NavMenu: FC<Props> = ({onClick, name}) => {

    return (
        <NavMenuWrapper>
            <NavFlex>
                <Profile>
                    <ProfileAvatar><ProfileIcon/></ProfileAvatar>
                    <ProfileName>{name || 'Name'}</ProfileName>
                </Profile>
                <LinkStyle to='teams' active='active'>
                    <Item>
                        <IconStyle><TeamsIcon/></IconStyle>
                        <Title>Teams</Title>
                    </Item>
                </LinkStyle>
                <LinkStyle to='players' active='active'>
                    <Item>
                        <IconStyle><PlayersIcon/></IconStyle>
                        <Title>Players</Title>
                    </Item>
                </LinkStyle>
            </NavFlex>
            <Item onClick={onClick}>
                <IconStyle singout><SingOutIcon/></IconStyle>
                <Title singout>Sign out</Title>
            </Item>
        </NavMenuWrapper>
    )
};

const LinkStyle = styled(NavLink)<{ active: string }>`
  &.${props => props.active} {
    span {
      color: ${({theme}) => theme.colors.red};
    }

    svg {
      fill: ${({theme}) => theme.colors.red};
    }
  }
`


const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 140px;
  background-color: white;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
  padding: 32px 0 0;
  @media ${({theme}) => theme.media._768} {
    align-items: flex-start;
    padding-left: 20px;
    width: 100%;
  }
`

const NavFlex = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Profile = styled.div`
  position: relative;
  display: none;
  @media ${({theme}) => theme.media._768} {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    margin-bottom: 24px;
    &::before {
      position: absolute;
      content: '';
      width: calc(100% + 20px);
      left: -20px;
      bottom: 0;
      height: 1px;
      background-color: ${({theme}) => theme.colors.lightGrey};
    }
  }
`
const ProfileName = styled.span`
  color: ${({theme}) => theme.colors.darkGrey};
  margin-left: 8px;
`
const ProfileAvatar = styled.div`
  height: 40px;

  & > svg {
    width: 40px;
    height: 40px;
  }
`


const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
  cursor: pointer;
  @media ${({theme}) => theme.media._768} {
    flex-direction: row;
    margin-bottom: 24px;
  }
`

const Title = styled.span<{ singout?: boolean }>`
  color: ${({theme}) => theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  margin-top: 4px;
  ${({singout, theme}) => singout && `
   color: ${theme.colors.lightestRed};
  `} @media ${({theme}) => theme.media._768} {
    margin-left: 8px;
  }
`

const IconStyle = styled.div<{ singout?: boolean }>`
  width: 30px;
  height: 30px;

  & > svg {
    width: 30px;
    height: 30px;
  }

  ${({singout, theme}) => singout && `
   & > svg {
   fill : ${theme.colors.lightestRed}
  `}
`

