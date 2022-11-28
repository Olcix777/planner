import React, {useContext} from "react"
import GlobalContext from "../context/GlobalContext"

export default function  CalendarHeader({nick}) {

    const {monthIndex, setMonthIndex}  = useContext(GlobalContext)
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
        console.log(monthIndex)
      }
      function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
        console.log(monthIndex)
      }

return(
        <header className="px-4 py-2 flex items-center  justify-between relative">
                <h1 className="mr-10 text-xl text-gray-500 font-bold ">Potężny Kalendarz</h1>

            <button onClick={() => console.log("wtf")}>aaa</button>
            <button className="border rounded py-2 px-4 hover:bg-sky-700">Today</button>
            <button onClick={handleNextMonth}><span className="material-symbols-outlined ml-10 text-2xl cursor-pointer">arrow_back_ios</span>
            </button>
            
            
            <button onClick={handlePrevMonth} >
            <span className="material-symbols-outlined mr-auto text-2xl cursor-pointer "  >arrow_forward_ios</span>
            </button>


            <h1 className=" justify-center items-center text-center text-3xl m-auto">Hello {nick} </h1>
            <button className="border-solid border-2 w-20">Month</button>
            <button className=" border-solid border-2 w-20">Day</button>
           
            <button className=" border-solid border-2 mr-20 w-20">Week</button>
            <button className=" border-solid border-2 mr-20 w-20 bg-red-600">Logout</button>

        </header>
    )
} 
