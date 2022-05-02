import {ChangeEvent, FC, useCallback, useEffect, useMemo, useState, memo} from 'react';
import styled from "styled-components";
import {PlayerCard} from "../components/PlayerCard/PlayerCard";
import {Search, Button, Pagination, Selects, Empty, Spinner} from "../../../common/components";
import {optionsSize} from "../../../common/components/Select/data";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {getPlayersThunk} from "../playersAction";
import {IOption} from "../../../common/components/Select/Select";
import {teamOptionThunk} from "../../teams/teamsAction";
import {playersSelectros} from "../playersSlice";


export const Players: FC = memo(() => {
    const dispatch = useAppDispatch();
    const players = useAppSelector(playersSelectros.selectAll);
    const {loadingPlayers, count} = useAppSelector(state => state.players);
    const {teamOption} = useAppSelector(state => state.teams);

    const [name, setName] = useState('');
    const [teamIds, setTeamIds] = useState('');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const handlerPageChange = useCallback(({selected}: { selected: number }): void => {
        setPage(selected + 1)
    }, []);
    const handlerNameChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }, []);
    const handlerPageSizeChange = useCallback((option: IOption): void => {
        setPageSize(Number(option?.value));
    }, []);
    const handlerTeamIdsChange = useCallback((value: IOption[]): void => {
        const arr = value.map(el => `&TeamIds=${el.value}`)
        setTeamIds(arr.join(''))
    }, []);
    const pageCounts = useMemo(() => Math.ceil((count || 1) / pageSize), [count, pageSize]);

    useEffect(() => {
        dispatch(getPlayersThunk({page, pageSize, name, teamIds}))
    }, [page, pageSize, name, teamIds])

    useEffect(() => {
        dispatch(teamOptionThunk())
    }, [])

    return (
        <Flex>
            <div>
                <WrapperSearchaAndBtn>
                    <SearchAndSelect>
                        <Search onChange={handlerNameChange}/>
                        <Selects options={teamOption} isMulti onChange={handlerTeamIdsChange}/>
                    </SearchAndSelect>
                    <LinkStyles to='addPlayer'><Button btnAdd>Add +</Button></LinkStyles>
                </WrapperSearchaAndBtn>
                {loadingPlayers ? <SpinnerWrapper><Spinner/></SpinnerWrapper> :
                    !count || !players ? <Empty/> : <GridContainer>
                        {players.map(({name, id, avatarUrl, number, team}) => <PlayerCard
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            team={team}
                            logo={avatarUrl}
                        />)}
                    </GridContainer>
                }
            </div>
            <WrapperPaginAndSelect>
                <Pagination pageCount={pageCounts} initialPage={page - 1} onChange={handlerPageChange}/>
                <Selects options={optionsSize} defaultValue={optionsSize[0]} menuPlacement='top'
                         onChange={handlerPageSizeChange}/>
            </WrapperPaginAndSelect>
        </Flex>
    );
})

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`


const LinkStyles = styled(Link)`
  max-width: 104px;
  width: 100%;
  @media ${({theme}) => theme.media._768} {
    max-width: none;
  }
`

const SearchAndSelect = styled.div`
  display: flex;
  width: 100%;

  & > :last-child {
    width: 100%;
    max-width: 365px;
    margin-left: 24px;
  }

  @media ${({theme}) => theme.media._768} {
    display: block;
    & > :last-child {
      max-width: none;
      margin: 16px 0 0;
    }
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 112px);
  @media ${({theme}) => theme.media._768} {
    height: calc(100vh - 78px);
  }
`

const WrapperPaginAndSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  & > :first-child {
    margin-right: 24px;
  }

  & > :last-child {
    width: 90px;

    .css-1umo15m-control, .css-16ihzgb-control {
      background: white;
    }
  }

  @media ${({theme}) => theme.media._768} {
    margin-bottom: 16px;
  }
`
const WrapperSearchaAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  & > :first-child {
    margin-right: 24px;
  }

  @media ${({theme}) => theme.media._768} {
    flex-direction: column;
    margin-bottom: 16px;
    & > :first-child {
      margin: 0 0 16px;
    }
  }

`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: stretch;
  grid-gap: 24px;
  margin-bottom: 24px;
  @media ${({theme}) => theme.media._980} {
    grid-template-columns: repeat(2, 1fr);
  }
`