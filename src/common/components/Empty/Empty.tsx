import {FC} from "react";
import styled from "styled-components";
import {EmptyTeamsSvg} from "../SVGConstans/SVG";
import {EmptyPlayersSvg} from "../SVGConstans/SVG";

interface Props {
    isflag?: boolean
}

export const Empty: FC<Props> = ({isflag = false}) => {
    return (
        <Wrapper>
            <Container>
                <EmptyImg>{isflag ? <EmptyTeamsSvg/> : <EmptyPlayersSvg/>}</EmptyImg>
                <Title>Empty here</Title>
                <Text>Add new {isflag ? 'teams' : 'players'} to continue</Text>
            </Container>
        </Wrapper>

    )
}


const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({theme}) => theme.media._768} {
    margin-top: 25px;
  }
`

const EmptyImg = styled.div`
  & > svg {
    max-width: 380px;
    height: 100%;
    width: 100%;
  }
`

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 15px;
  padding: 48px 40px;
  text-align: center;

`

const Title = styled.h3`
  color: ${({theme}) => theme.colors.lightestRed};
  margin-top: 48px;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  @media ${({theme}) => theme.media._768} {
    font-size: 22px;
    line-height: 30px;
  }
`
const Text = styled.p`
  color: ${({theme}) => theme.colors.grey};
  font-size: 24px;
  line-height: 33px;
  font-weight: normal;
  margin-top: 24px;
  @media ${({theme}) => theme.media._768} {
    font-size: 18px;
    line-height: 25px;
    margin-top: 15px;
  }
`
