import React,{Component} from "react";
import '../../functionBasedComponents/feed/index.jsx'
import Feed from "../../functionBasedComponents/feed/index.jsx";

class FeedClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id:1, nome:'Manoel', curtidas:34, comentarios:23},
                {id:2, nome:'Maria', curtidas:45, comentarios:12},
                {id:3, nome:'Joao', curtidas:102, comentarios:70},
            ]
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.feed.map(
                        (item) => {
                            return (
                                <Feed id={item.id} nome={item.nome} curtida={item.curtidas} comentarios={item.comentarios}></Feed>       
                            );
                        }
                    )
                }
                    
                
            </div>
        );
    }
}export default FeedClass;