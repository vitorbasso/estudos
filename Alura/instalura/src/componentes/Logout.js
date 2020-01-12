import React from "react";
import { Redirect } from "react-router-dom";

export default class Logout extends React.Component{
    render(){
        localStorage.removeItem('auth-token');
        return <Redirect to="/" />;
        
    }

}