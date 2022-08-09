import React, { Component } from 'react'

export default class Time extends Component {
    //1. Provides Intial value

    constructor(props) {
  super(props);
  

 this.state = {
  Time:new Date()
 }
}

tick = () => {
    this.setState({
        Time: new Date()
    })
}

    //3.sent request to a server to a server for a data

    componentDidMount=()=>{
     this.Time=setInterval(()=>this.tick(),1000)
    }

    //4. Whenever previous state or props is updated than it is called

    componentDidUpdate =(Newprops,prevstate) =>{
        if(prevstate.Time !== this.state.Time){
          console.log("componentDidUpdate");
        }
    }

    //5. Whenever we move to another componets than it is called.It relese resource.
componentWillUnmount=()=>{
  clearInterval(this.Time);
}

    //2.Display on the screen Whenever state value changed rendor method is called.
  render() {
    return (
      <div>
        <p>{this.state.Time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

