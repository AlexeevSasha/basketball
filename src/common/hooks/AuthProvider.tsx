import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../core/redux/reduxType";


export const AuthProvider: FC = () => {
    const {user} = useAppSelector(state => state.auth);
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return <Outlet/>;
}
