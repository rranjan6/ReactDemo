import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
        setInterval(() => {
            this.setState({count:this.state.count+1}) 
        }, 1000);
        console.log("Constructor Component");
    }

    // handleClick=()=>{
        
    // }

    // componentDidUpdate(){
    //     setTimeout(()=>{
    //         this.setState({count:this.state.count+1})
    //     },1000)
    // }

    // componentDidMount() {
    //     this.setState({count: this.state.count+1})
    // }

  render() {
      console.log("Render Component");
    return (
        <div>
            <h1 >{this.state.count}</h1>
      
        </div>
    )
  }
}

export default ClassCounter