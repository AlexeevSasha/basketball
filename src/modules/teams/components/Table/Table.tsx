import {FC, useEffect, useState} from 'react'
import styled from "styled-components";
import {ContentTable} from "./ContentTable";
import {useParams} from "react-router-dom";
import {IGetPlayer} from "../../../../api/players/playersDto";
import {useAppDispatch, useAppSelector} from "../../../../core/redux/reduxType";
import {getPlayersThunk} from "../../../players/playersAction";
import {differenceInYears} from "date-fns";
import {playersSelectros} from "../../../players/playersSlice";


export const Table: FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const players = useAppSelector(playersSelectros.selectAll);

    const [playerTeam, setPlayersTeam] = useState<IGetPlayer[] | []>([]);

    useEffect(() => {
        dispatch(getPlayersThunk({}))
    }, [])

    useEffect(() => {
        if (!players) return;
        const newArr: IGetPlayer[] = [];
        players.forEach(el => {
            if (`${el.team}` === id) {
                const age = differenceInYears(new Date().getTime(), new Date(el.birthday || '')) + ''
                newArr.push({...el, birthday: age})
            }
        })
        setPlayersTeam(newArr)
    }, [dispatch, players])

    return (
        <TableStyle>
            <colgroup>
                <col style={{width: '5%'}}/>
                <col style={{width: '65%'}}/>
                <col style={{width: '10%'}}/>
                <col style={{width: '10%'}}/>
                <col style={{width: '10%'}}/>
            </colgroup>
            <thead>
            <tr>
                <th>#</th>
                <th>Player</th>
                <TableTh>Height</TableTh>
                <TableTh>Weight</TableTh>
                <TableTh>Age</TableTh>
            </tr>
            </thead>
            <tbody>
            {playerTeam.map(el => <ContentTable key={el.id} data={el}/>)}
            </tbody>
        </TableStyle>
    )
}

const TableTh = styled.th`
  @media ${({theme}) => theme.media._980} {
    display: none;
  }
`

const TableStyle = styled.table`
  height: 100%;
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 0;


  & > thead > tr > th {
    padding: 10px 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey};
    @media ${({theme}) => theme.media._980} {
      padding: 10px 16px ;
    }
  }

  & > thead > tr, & > tbody > tr {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.5px;
      background: ${({theme}) => theme.colors.lightGrey};
    }
  }

  & > tbody > tr > td {
    padding: 10px 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey};
    @media ${({theme}) => theme.media._980} {
      padding: 10px 16px ;
    }
  }

  th {
    text-align: start;
  }
`

