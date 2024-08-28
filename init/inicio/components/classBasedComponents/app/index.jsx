import React,{Component} from "react";
import Equipe from "../equipe";
import '../../../css/all.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
            hora: "00:00:00"
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
        // this.setState({contador: contador +=1});
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        this.setState(state);
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora:new Date().toLocaleTimeString()})
        }, 1000);
    }

    render(){
        return(
            <div>
                <div>
                    <div>{this.state.hora}</div>
                </div>
                <div>
                    <h1>veja nosso contador:</h1>
                    <Equipe name="Igor"/>
                    {/* <button onClick={this.aumentar}>+</button> */}
                    <button onClick={() => this.setState({contador: 100})}>+</button>
                    <h1>{this.state.contador}</h1>
                    <button onClick={this.diminuir}>-</button>
                </div>
                
            </div>
        );
    }
}
export default App;