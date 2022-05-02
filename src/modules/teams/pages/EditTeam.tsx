import {FC, useEffect} from "react";
import {FormTeam} from "../components/FormTeam/FormTeam";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {getTeamIdThunk} from "../teamsAction";


export const EditTeam: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams();
    const {team} = useAppSelector(state => state.teams)

    useEffect(() => {
        dispatch(getTeamIdThunk(Number(id)))
    }, [id])
    return (
        <FormTeam dataTeam={team || undefined} isEditFlag/>
    )
}