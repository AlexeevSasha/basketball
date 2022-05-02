import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {FormPlayer} from "../components/FormPlayer/FormPlayer";
import {getPlayerIdThunk} from "../playersAction";
import {teamOptionThunk} from "../../teams/teamsAction";


export const EditPlayer: FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {player} = useAppSelector((state) => state.players);

    useEffect(() => {
        dispatch(teamOptionThunk())
        dispatch(getPlayerIdThunk(Number(id)))
    }, [])

    return (
        <FormPlayer dataPlayer={player || undefined} isEditFlag/>
    )
}