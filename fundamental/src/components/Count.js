import React, { Component } from 'react'



class Count extends Component {

constructor(props) {
  super(props)

  this.state = {
     c:0
  }
}
incr(){
    this.setState({
        c :this.state.c + 1
    },()=>{console.log(this.state.c)})

    
}
prv(){
    this.setState((prevState,props)=>({
        
        c:prevState.c+1

    }),()=>{console.log(this.state.c)})
}


  render() {
    return (
      <div>
        count component{this.state.c}
        <button onClick={()=>{this.incr()}}>increase number</button>
        <button onClick={()=>{this.prv()}}>prevaious</button>
      </div>
    )
  }
}

export default Count
