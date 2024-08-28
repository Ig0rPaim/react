import React,{Component} from "react";

class Equipe extends Component{
    
    render(){
        return(
            <div>
                <h6>autor: {this.props.name}</h6>
            </div>
        );
    }
}
export default Equipe;