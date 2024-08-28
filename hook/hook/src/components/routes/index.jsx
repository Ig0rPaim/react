import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../home/index.jsx"
import Sobre from "../sobre/index.jsx"
import Erro from '../erro';
import React from 'react';
function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre/:conteudo" element={<Sobre />} />
                <Route path="*" element={<Erro />}/>
            </Routes>
        </BrowserRouter>
    );
    
}export default Rotas;