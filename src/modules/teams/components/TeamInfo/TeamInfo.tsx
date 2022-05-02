import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import noLogo from '../../../../assets/images/no-logo-time.svg';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../../core/redux/reduxType";
import {getTeamIdThunk} from "../../teamsAction";
import {Spinner} from "../../../../common/components";

export const TeamInfo: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams();
    const {team, loadingTeams} = useAppSelector(state => state.teams)

    useEffect(() => {
        dispatch(getTeamIdThunk(Number(id)))
    }, [])

    return (
        <TeamWrapper>
            {loadingTeams ? <Spinner/> : <>
                <ImgLogo><img
                    src={team?.imageUrl || noLogo}/></ImgLogo>
                <Content>
                    <Name>{team?.name}</Name>
                    <Flex>
                        <Group>
                            <Title>Year of foundation</Title>
                            <Text>{team?.foundationYear}</Text>
                            <Title>Conference</Title>
                            <Text>{team?.division}</Text>
                        </Group>
                        <Group>
                            <Title>Division</Title>
                            <Text>{team?.conference}</Text>
                        </Group>
                    </Flex>
                </Content>
            </>}
        </TeamWrapper>
    )
}


const TeamWrapper = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
  border-radius: 0 0 10px 10px;
  align-items: center;
  height: 410px;
  @media ${({theme}) => theme.media._980} {
    flex-direction: column;
    height: auto;
  }
`
const ImgLogo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 210px;
    height: 210px;
    object-fit: contain;
    @media ${({theme}) => theme.media._980} {
      margin: 20px auto;
      width: 150px;
      height: 150px;
    }
    @media ${({theme}) => theme.media._480} {
      width: 100px;
      height: 100px;
    }
  }
`
const Content = styled.div`
  margin: 40px 0 0;
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
  @media ${({theme}) => theme.media._480} {
    font-size: 20px;
    line-height: 25px;
  }
`
const Flex = styled.div`
  display: flex;
  @media ${({theme}) => theme.media._980} {
    flex-direction: column;
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  @media ${({theme}) => theme.media._980} {
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
  @media ${({theme}) => theme.media._480} {
    font-size: 15px;
    line-height: 17px;
  }
`