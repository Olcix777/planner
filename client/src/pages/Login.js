import React, { Component } from "react"
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {email, password } = this.state;
        console.log( email,password);
        fetch("http://localhost:5000/login", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status=="ok") {
                    window.localStorage.setItem("token", data.data)
                    window.location.href="./calendar"
                }
            })
        }      
    
    render(){
    
        return (
            <section className="form">
            <h1>Zaloguj się</h1>
            <form onSubmit={this.handleSubmit}>
            <input 
            type="email" 
            id="mail" 
            placeholder="e=mail"  
            onChange={(e)=> this.setState({ email: e.target.value })}

            />

            <br/>
            <input type="Password" id="password" placeholder="Hasło"
                onChange={(e)=> this.setState({ password: e.target.value })}
            /><br/>
            <input type="submit" value="Zaloguj się"/>
            </form>
        </section>
               )
    }
}