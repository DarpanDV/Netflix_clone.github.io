import React,{useState,useEffect} from 'react'
import './Navbar.css'
function Navbar() {

const[show, handleShow] = useState()

useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>100)
    {
        handleShow(true);
    }
    else{
        handleShow(false);
    }
})
    return()=>{
        window.removeEventListener("scroll");
    }

},[])


    return (
        <div className={`nav ${show&&"nav_black"}`}>
            <img 
            className="nav-logo"
            src="https://wallpapercave.com/wp/wp5063339.png"
            alt="Netflix logo"
            />
             <img 
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix avatar"
            />

        </div>
    )
}

export default Navbar
