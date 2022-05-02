import {FC, useEffect} from "react";
import {FormPlayer} from "../components/FormPlayer/FormPlayer";
import {useAppDispatch} from "../../../core/redux/reduxType";
import {teamOptionThunk} from "../../teams/teamsAction";

export const AddPlayer: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(teamOptionThunk())
    }, [dispatch])

    return (
        <FormPlayer/>
    )
}