import React,{Component} from "react";

class Biscoito extends Component{
    constructor(props){
        super(props);
        this.state = {
            frases: [
                "frase 1",
                "frase 2",
                "frase 3",
                "frase 4",
            ],
            frase: ""
        }
        this.mostrarFrase = this.mostrarFrase.bind(this);
    }

    mostrarFrase(){
        let state = this.state;
        let frases = state.frases;
        let index = Math.floor(Math.random() * frases.length);
        state.frase = frases[index];
        this.setState(state);

    }

    render(){
        return (
            <div>
                <h2>frase do dia</h2>
                <h3>{this.state.frase}</h3>
                <button onClick={this.mostrarFrase}>mostrar</button>
            </div>
        );
    }
}export default Biscoito;