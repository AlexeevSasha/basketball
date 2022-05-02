import {FC, useEffect} from "react";
import styled from "styled-components";
import noLogo from '../../../../assets/images/no-logo-player.svg'
import {useAppDispatch, useAppSelector} from "../../../../core/redux/reduxType";
import {Spinner} from "../../../../common/components";
import {useParams} from "react-router-dom";
import {getPlayerIdThunk} from "../../playersAction";
import {differenceInYears} from 'date-fns';

export const PlayerInfo: FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {player, loadingPlayers} = useAppSelector(state => state.players);

    useEffect(() => {
        dispatch(getPlayerIdThunk(Number(id)))
    }, [])

    return (
        <PlayerWrapper>
            {loadingPlayers ? <Spinner/> : <>
                <ImgLogo><img src={player?.avatarUrl || noLogo} alt='logo'/></ImgLogo>
                <Content>

                    <Name>{player?.name} <Numbers>#{player?.number}</Numbers></Name>
                    <Flex>
                        <Group>
                            <Wrapper>
                                <Title>Position</Title>
                                <Text>{player?.position}</Text>
                            </Wrapper>
                            <Wrapper>
                                <Title>Team</Title>
                                <Text>{player?.teamName}</Text>
                            </Wrapper>
                        </Group>
                        <Group>
                            <Wrapper>
                                <Title>Height</Title>
                                <Text>{player?.height} cm</Text>
                            </Wrapper>
                            <Wrapper>
                                <Title>Weight</Title>
                                <Text>{player?.weight} kg</Text>
                            </Wrapper>
                        </Group>
                        <Group>

                            <Wrapper> <Title>Age</Title>
                                <Text>{differenceInYears(new Date().getTime(), new Date(player?.birthday || '')) || 0}</Text>
                            </Wrapper>

                        </Group>
                    </Flex>
                </Content>
            </>
            }
        </PlayerWrapper>
    )
}


const PlayerWrapper = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
  border-radius: 0 0 10px 10px;
  align-items: center;
  height: 525px;
  @media ${({theme}) => theme.media._980} {
    flex-direction: column;
    height: 100%;
    margin-bottom: 20px;
  }
`
const ImgLogo = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  @media ${({theme}) => theme.media._980} {
    max-width: 350px;
  }

  img {
    width: 400px;
    object-fit: contain;
    @media ${({theme}) => theme.media._980} {
      width: 300px;
      height: 250px;
      margin: 48px auto;
    }
    @media ${({theme}) => theme.media._768} {
      margin: 48px auto;
      width: 250px;
      height: 150px;
    }
  }
`
const Content = styled.div`
  margin: 40px 20px 0 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  @media ${({theme}) => theme.media._980} {
    align-items: center;
    margin: 0;
  }

`
const Name = styled.div`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 40px;
  @media ${({theme}) => theme.media._980} {
    font-size: 30px;
    line-height: 35px;
  }
  @media ${({theme}) => theme.media._480} {
    font-size: 20px;
    line-height: 25px;
  }
`
const Numbers = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;

`
const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${({theme}) => theme.media._980} {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
  }
`
const Wrapper = styled.div`
  margin-right: 80px;
  @media ${({theme}) => theme.media._980} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`

const Title = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  @media ${({theme}) => theme.media._480} {
    font-size: 17px;
    line-height: 20px;
    margin: 0;
  }

`
const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 50px;
  margin-top: 8px;
  @media ${({theme}) => theme.media._980} {
    margin-bottom: 32px;
  }
  @media ${({theme}) => theme.media._980} {
    font-size: 15px;
    line-height: 17px;
  }
`