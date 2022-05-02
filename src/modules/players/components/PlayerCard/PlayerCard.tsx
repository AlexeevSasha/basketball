import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import noLogo from '../../../../assets/images/no-logo-player.svg';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../core/redux/reduxType";

interface IProps {
    logo: string;
    name: string;
    number: number;
    id?: number;
    team: number;
}

export const PlayerCard: FC<IProps> = ({logo, name, number, team, id}) => {
    const {teamOption} = useAppSelector(state => state.teams);
    const [playerTeam, setPlayerTeam] = useState('');

    useEffect(() => {
        teamOption.find(el => el.value === team ? setPlayerTeam(el.label) : '')
    }, [teamOption])

    return (
        <Flex to={`${id}`}>
            <Logo>
                <ImgContainer>
                    <ImgDiv>
                        <Img src={logo || noLogo} alt=""/>
                    </ImgDiv>
                </ImgContainer>
            </Logo>
            <CartItem>
                <Name>{name}<Number>#{number}</Number></Name>
                <Teams>{playerTeam || 'Название команды'}</Teams>
            </CartItem>
        </Flex>
    )
}


const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 280px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
  max-width: 365px;
  width: 100%;
  height: 280px;

  @media (max-width: 1100px) {
    height: 230px;
  }
  @media ${({theme}) => theme.media._480} {
    height: 150px;
  }
`
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  height: 90%;
  max-width: 270px;

  @media ${({theme}) => theme.media._480} {
    max-width: 130px;
  }
`

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`
const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 365px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`
const Name = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  @media ${({theme}) => theme.media._480} {
    font-size: 15px;
  }
`
const Number = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
  margin-left: 6px;
`
const Teams = styled.p`
  color: ${({theme}) => theme.colors.lightGrey};
  margin-top: 10px;
  @media ${({theme}) => theme.media._480} {
    font-size: 12px;
  }
`