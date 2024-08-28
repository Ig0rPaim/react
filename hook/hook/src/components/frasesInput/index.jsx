import { useCallback, useEffect, useMemo } from "react";
import React,{useState} from "react"

function FrasesInput(){
    const[texto, setTexto] = useState("Digite sua tarefa");
    const[lista, setLista] = useState(['1', '2']);
    const addTarefa = useCallback(()=>{setLista([texto,...lista]);
        setTexto("");}, [texto, lista])


    // function addTarefa(){
    //     setLista([texto,...lista]);
    //     setTexto("");
    // }

    // useEffect(()=>{alert('tarefa adcionado com sucesso');}, lista)
    let tamanho = useMemo(()=>{return lista.length}, lista);
    

        return(
            <div>
                <ul>
                    {lista.map((i) => <li>{i}</li>)}
                </ul>
                <div>vc tem {tamanho} tarefas</div>
                <input type="text" value={texto} onChange={(e)=> setTexto(e.target.value)}></input>
                <button onClick={addTarefa.bind(this)}>adicionar</button>
            </div>  
        );
    
}export default FrasesInput;