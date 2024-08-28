import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home(){
    const [texto, setTexto] = useState("");
    return(
        <div>
        <h1>Home</h1>
        <input onChange={(e)=>{setTexto(e.target.value)}}></input>
        <div>
            <Link to= {`/sobre/${texto}`}>Sobre</Link>
        </div>
        </div>
    );
}export default Home;