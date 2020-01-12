import React from "react";
import {Redirect} from 'react-router-dom';


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.location.state !== undefined){
            this.setState({message: this.props.location.state.msg});
        }else{
            this.setState({message: ""});
        }
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("https://instalura-api.herokuapp.com/api/public/login", {
            method: 'POST',
            body: JSON.stringify({login: this.login.value, senha: this.password.value}),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok){
                return res.text();
            } else {
                throw new Error("nao foi possivel fazer o login");
            }
        })
        .then(token => {
            localStorage.setItem('auth-token', token);
            this.setState({
                message: <Redirect to="/timeline" />
            })
        })
        .catch(err => {
            this.setState({message: err.message});
        });
    }

    render(){
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.message}</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={input => this.login = input} />
                    <input type="password" ref={input => this.password = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}