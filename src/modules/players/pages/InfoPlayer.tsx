import {FC, useState} from 'react';
import {PlayerInfo} from "../components/PlayerInfo/PlayerInfo";
import {useAppDispatch} from "../../../core/redux/reduxType";
import {useNavigate, useParams} from "react-router-dom";
import {HeaderCardInfo, PopapDelete} from "../../../common/components";
import {deletePlayersThunk} from "../playersAction";

export const InfoPlayer: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const [visible, setVisible] = useState<boolean>(false);
    const onEditTeam = () => navigate('edit');
    const onDeleteTeam = () => setVisible(true);
    const closeModal = () => setVisible(false);

    const onHandlerClickYes = () => {
        setVisible(false);
        dispatch(deletePlayersThunk({id: Number(id), callback: () => navigate(-1)}))
    }

    return (
        <div style={{position: 'relative'}}>
            <PopapDelete visible={visible} onClose={closeModal} onHandlerClickYes={onHandlerClickYes} player/>
            <HeaderCardInfo onDelete={onDeleteTeam} onEdit={onEditTeam}/>
            <PlayerInfo/>
        </div>
    );
}