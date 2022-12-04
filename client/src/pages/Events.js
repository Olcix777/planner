import React, { useState } from "react";



const Events = () => {
    let [StartDate, setStartDate] = useState();
    let [EndDate, setEndDate] = useState();
    const [title, setTitle] = useState('')
    const [descryption, setDescryption] = useState('')

  
    async function addEvent(event) {
      event.preventDefault()
      StartDate = StartDate.replace('T', ' ')
      EndDate = EndDate.replace('T', ' ')
      const response = await fetch('http://localhost:5000/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.user,
          title,
            descryption,
            StartDate,
            EndDate,
        }),
       
      
      })
      StartDate.replace('T', ' ')
     
      console.log("chuj")

      
      const data = await response.json()
  
      if (data.status === 'ok') {
              alert("działa")
      }
          else {
              alert("User with that email exists")
          }

  
    }
 
    


      

    return (
     <form onSubmit={addEvent}>
     <input type="text" placeholder="TITLE" onChange={(e) => setTitle(e.target.value)}/>
     <input type="datetime-local"  onChange={(e) => setStartDate(e.target.value)}/>
     <input type="datetime-local" onChange={(e) => setEndDate(e.target.value)}/>
    

      <input type="text" placeholder="descryption..." onChange={(e) => setDescryption(e.target.value)}/>
     

      <input type="submit"/>
      </form>
    );
      }

  export default Events

  /*

  
    




  */