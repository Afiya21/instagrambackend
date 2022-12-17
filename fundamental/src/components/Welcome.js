import React,{Component} from "react";




class Welcome extends Component{

    constructor(){
    super();
    this.state={name:"john doe", age:27}
}

changedata(){
    this.setState({
        name:"afiya",age:23
    });

}
    render(){
        return (
            <div>
                <h2>name {this.state.name}  and age{this.state.age}</h2>
                <button onClick={()=>this.changedata()}>change value</button>
            </div>
            
        );
    }
}


export default Welcome