import React from "react";

function Feed(props){

        return(
            <div key={props.id}>
                <h1>{props.nome}</h1>
                <h4> curtidas: {props.curtida}</h4>
                <h4>comentarios: {props.comentarios}</h4>
            </div>
        );

}export default Feed;