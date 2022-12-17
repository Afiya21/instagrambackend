import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     email:'',
     query:'',
     timeToReach:''

  }
}

onChangeEmail =(event)=>{
    console.log(event.target.value);//give the data entered in to the input box
this .setState({
        email: event.target.value
    });

}

onChangequery=(event)=>{
   this.setState({
      query:event.target.value
   })
}
onChangeTime =(event)=>{
    console.log(event.target.value);//give the data entered in to the input box
     this .setState({
        timeToReach: event.target.value
    });

}
onSubmitE=(event)=>{
   event.preventDefault();
   console.log("form submitted")
   console.log(`Email: ${this.state.email}, Query: ${this.state.query},`);
}
componentDidMount(){//will be called after the constructor and all the elemnts of DOM has been loaded

}


  render() {
    return (
      <div>
        enquery form
         <form onSubmit={this.onSubmitE}>
             <div>
               <label>Query</label>
               <textarea  value={this.state.query} onChange={this.onChangequery}></textarea>
             
            </div>
            <div>
               <label>email</label>
               <input type="email"
               value={this.state.email}
               onChange={this.onChangeEmail}/>
            </div>
            <div>
               <label>prifferd time to reach</label>
               <select value={this.timeToReach} onChange={this.onChangeTime}>
                <option value="morning">morning</option>
                 <option value="afternoon">afternoon</option>
                  <option value="eveing">evening</option>
               </select>
            </div>
            <button type="submit">send enquery</button>
         </form>
      </div>
    )
  }
}

export default Form
