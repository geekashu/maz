import React, {useEffect} from "react";
import {Redirect} from "react-router";
import {useDispatch} from "react-redux";
import {AuthAction} from "actions";
import {authInstance} from "containers/App";


const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        authInstance.defaults.headers.common['Authorization'] = null;
        dispatch(AuthAction.signOut())
    },[dispatch])

    return (
        <Redirect to="/" />
    );
}

export default Logout;
