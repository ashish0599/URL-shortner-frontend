import React, { useContext } from "react";
import{AppContext} from "./context";


function NavBar(){
  const{result } = useContext(AppContext)
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-block">
  <a className="navbar-brand" href="a" style={{color:"black" , fontWeight:"bolder" , fontSize:"2.4rem"}}>URL Shortner</a>
  <p className="profile">{result.name}</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <div className="icons">
    <i class="fas fa-user fa-2x"></i>
    <div className="logSign"></div>
    </div>
    </ul>
  </div>
 
</nav>
        </>
    )
}

export default NavBar;
