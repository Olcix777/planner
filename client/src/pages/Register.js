import React, {Component} from "react";
import { Link } from "react-router-dom"
export default class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            nick:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
       e.preventDefault();
        const {email, nick, password} = this.state;
        console.log(email, nick ,password);
        fetch("http://localhost:5000/register", {
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
            email,
            nick,
            password,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            //console.log(data,"userRegister");
        })
    }
    
    render() {
    return (
    <>
    <section className="form">
        <h1>Zarejestruj Się</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="email" id="mail" placeholder="E-mail" onChange={(e)=>this.setState({email: e.target.value})}/><br/>
        <input type="text" id="nick" placeholder="Nick..."onChange={(e)=>this.setState({nick: e.target.value})}/><br/>
        <input type="Password" id="password" placeholder="Hasło" onChange={(e)=>this.setState({password: e.target.value})}/><br/>
     <input type="submit" value="Zarejestruj się"/>
        </form>
    </section>
   
    </>
    )
}
}