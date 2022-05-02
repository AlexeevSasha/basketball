import {FC, useEffect, useState, useCallback, ChangeEvent, useMemo} from 'react';
import styled from "styled-components";
import {TeamCard} from "../components/TeamCard/TeamCard";
import {Search, Button, Pagination, Selects, Spinner, Empty} from "../../../common/components";
import {optionsSize} from "../../../common/components/Select/data";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {IOption} from "../../../common/components/Select/Select";
import {getTeamsThunk} from "../teamsAction";
import {teamsSelectros} from "../teamsSlice";


export const Teams: FC = () => {
    const dispatch = useAppDispatch();
    const teams = useAppSelector(teamsSelectros.selectAll);
    const {count, loadingTeams} = useAppSelector(state => state.teams);

    const [name, setName] = useState('');
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
    const pageCounts = useMemo(() => Math.ceil((count || 1) / pageSize), [count, pageSize])

    useEffect(() => {
        dispatch(getTeamsThunk({page, pageSize, name}))
    }, [page, pageSize, name]);

    return (
        <Flex>
            <div>
                <WrapperSearchaAndBtn>
                    <Search onChange={handlerNameChange}/>
                    <LinkStyles to='addTeam'><Button btnAdd>Add +</Button></LinkStyles>
                </WrapperSearchaAndBtn>
                {loadingTeams ? <SpinnerWrapper><Spinner/></SpinnerWrapper> :
                    !count || !teams ? <Empty isflag/> : <GridContainer>
                        {teams?.map(({imageUrl, name, id, foundationYear}) => <TeamCard
                            key={id}
                            id={id}
                            foundationYear={foundationYear}
                            logo={imageUrl}
                            name={name}/>)}
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
}

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