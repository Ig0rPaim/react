import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Sobre(){
    const {conteudo} = useParams();
    return(
        <>
        <h1>Sobre {conteudo}</h1>
        <Link to="/">home</Link>
        </>
    );
}export default Sobre;