import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {OutletWrapper} from "./common/hooks/OutletWrapper";
import {Teams} from "./modules/teams/pages/Teams";
import {Players} from "./modules/players/pages/Players";
import {Error404} from "./common/components/Error404/Error404";
import {AddTeam} from "./modules/teams/pages/AddTeam";
import {AddPlayer} from "./modules/players/pages/AddPlayer";
import {SingIn} from "./modules/authorization/pages/SingIn";
import {SingUp} from "./modules/authorization/pages/SingUp";
import {InfoPlayer} from './modules/players/pages/InfoPlayer';
import {InfoTeam} from './modules/teams/pages/InfoTeam';
import {AuthProvider} from "./common/hooks/AuthProvider";
import {EditTeam} from "./modules/teams/pages/EditTeam";
import {EditPlayer} from "./modules/players/pages/EditPlayer";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/teams"/>}/>
            <Route path="login" element={<SingIn/>}/>
            <Route path="registration" element={<SingUp/>}/>
            <Route  element={<AuthProvider/>}>
                <Route path='/' element={<OutletWrapper/>}>
                    <Route path='teams' element={<Teams/>}/>
                    <Route path='teams/:id' element={<InfoTeam/>}/>
                    <Route path='teams/addTeam' element={<AddTeam/>}/>
                    <Route path="teams/:id/edit" element={<EditTeam/>}/>
                    <Route path='players' element={<Players/>}/>
                    <Route path='players/:id' element={<InfoPlayer/>}/>
                    <Route path="players/:id/edit" element={<EditPlayer/>}/>
                    <Route path='players/addPlayer' element={<AddPlayer/>}/>
                </Route>
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    )
}

