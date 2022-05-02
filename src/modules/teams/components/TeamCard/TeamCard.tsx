import {FC} from "react";
import styled from "styled-components";
import noLogo from '../../../../assets/images/no-logo-time.svg'
import {Link} from "react-router-dom";

interface IProps {
    logo: string,
    name: string,
    foundationYear: number
    id?: number;
}

export const TeamCard: FC<IProps> = ({logo, name, foundationYear, id}) => {
    return (
        <Flex to={`${id}`}>
            <Logo>
                <Img src={logo || noLogo}/>
            </Logo>
            <CartItem>
                <Name>{name}</Name>
                <Yarn>Year of foundation: {foundationYear}</Yarn>
            </CartItem>
        </Flex>
    )
}


const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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


const Img = styled.img`
  max-width: 150px;
  width: 100%;
  height: 90%;
  object-fit: contain;
  @media (max-width: 1100px) {
    width: 120px;
  }
  @media ${({theme}) => theme.media._480} {
    width: 80px;
  }
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.darkGrey};
  max-width: 365px;
  width: 100%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`
const Name = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 400px) {
    font-size: 15px;
  }
`
const Yarn = styled.p`
  color: ${({theme}) => theme.colors.lightGrey};
  margin-top: 10px;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`


