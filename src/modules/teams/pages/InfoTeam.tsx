import {FC, useState} from 'react';
import {TeamInfo} from "../components/TeamInfo/TeamInfo";
import {HeaderCardInfo, PopapDelete} from "../../../common/components";
import {deleteTeamThunk} from "../teamsAction";
import {useAppDispatch} from "../../../core/redux/reduxType";
import {useNavigate, useParams} from "react-router-dom";
import {Table} from "../components/Table/Table";
import styled from "styled-components";

export const InfoTeam: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {id} = useParams();

    const [visible, setVisible] = useState<boolean>(false)
    const onEditTeam = () => navigate('edit')
    const onDeleteTeam = () => setVisible(true)
    const closeModal = () => setVisible(false)

    const onHandlerClickYes = () => {
        setVisible(false);
        dispatch(deleteTeamThunk({id: Number(id), callback: () => navigate(-1)}))
    }
    
    return (
        <div style={{position: 'relative'}}>
            <PopapDelete visible={visible} onClose={closeModal} onHandlerClickYes={onHandlerClickYes}/>
            <HeaderCardInfo onDelete={onDeleteTeam} onEdit={onEditTeam}/>
            <TeamInfo/>
            <WrapperTable>
                <Title>Roster</Title>
                <Table/>
            </WrapperTable>
        </div>
    );
}

const WrapperTable = styled.div`
  margin-top: 24px;
  background: white;
  border-radius: 10px;
  border: 0.5px solid ${({theme}) => theme.colors.lightGrey};

`


const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.colors.grey};
  padding: 14px 32px;
  @media ${({theme}) => theme.media._980} {
    padding: 14px 16px ;
    font-size: 15px;
    line-height: 20px;
  }
`