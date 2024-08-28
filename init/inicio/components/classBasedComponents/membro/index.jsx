import React,{Component} from "react";

class Membro extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome:props.nome,
            status: true
        }
        this.logar = this.logar.bind(this);
        // this.deslogar = this.deslogar.bind(this);
    }

    logar(status){
        let state = this.state;
        state.status=status;
        this.setState(state);
        // this.setState({status:status})
    }

    // deslogar(){
    //     let state = this.state;
    //     state.nome="";
    //     this.setState(state);
    // }
    
    render(){
        return(
            <div>
                {/* <h1>{this.state.nome}</h1>
                <button onClick={() => this.logar(false)}>logar</button>
                <button onClick={this.deslogar}>deslogar</button> */}
                {this.state.status ? (
                    <div>
                        <h1>tela de login</h1>
                        <button onClick={() => this.logar(false)}>logar</button>
                    </div>  ) 
                    : (
                    <div>
                        <h1>tela home</h1>
                        <button onClick={() => this.logar(true)}>sair</button>
                    </div> )
                }   
            </div>
            
        );
    }
}
export default Membro;