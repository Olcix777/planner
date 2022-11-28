
import "../index.css"
import car from "../img/car.png"
import { Link } from "react-router-dom"
import  { Nav }   from "../components/Nav"



export function Home() {

    return (
        
        <>
        <Nav/>      
        <div className="home">
        <marquee direction="right">
        <img src={car} alt="xd"/>
        </marquee>
        <section>
        <h1>Potężny Kalendarz</h1>
        <Link to="/register">
        <button className="primary-button">
             Register
        </button>
        </Link>
        </section>
        </div>
       
    </>
    )
}