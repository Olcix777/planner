import React, { useState,useContext,useEffect } from "react";
import {getMonth} from "../utility/getMonth"
import Month from "../components/Month"
import CalendarHeader from "../components/CalendarHeader"
import GlobalContext from "../context/GlobalContext";






export default function Calendar(){
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const [events, setEvents] = useState('')
  const [nick, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  let [StartDate, setStartDate] = useState();
  let [EndDate, setEndDate] = useState();
  const [title, setTitle] = useState('')
  const [descryption, setDescryption] = useState('')

  
    
  
  


  

 
 
 
 
 



    return (
      
        <>
             <CalendarHeader/>
            <div className="h-5/6 flex flex-columns">
              <Month month={currenMonth}/>
            </div>
          <h1>{title} i chuk</h1>
        </>
           )

}


/*c
import React, { Component, useState,useContext } from "react";
import {getMonth} from "../utility/getMonth"
import Month from "../components/Month"
import CalendarHeader from "../components/CalendarHeader"

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      currentMonth: getMonth(),
      setCurrentMonth: "",
      monthIndex:""
    };
  }

  componentDidMount() {
    
    fetch("http://localhost:5000/userinfo", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ userData: data.data });
        this.state.setCurrentMonth = {}
      });
      
  }
 

  render(){
    
    return (
      
        <>
             <CalendarHeader nick={this.state.userData.nick}/>
            <div className="h-5/6 flex flex-columns">
              <Month month={ this.state.currentMonth }/>
            </div>


        </>
           )
}
}*/