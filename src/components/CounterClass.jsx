import { Component } from "react";
class CounterClass extends Component{
 constructor(){
   super()
    this.state = {counter:0}
    this.decreament = this.decreament.bind(this)
 }

decreament(){
   this.setState((prev)=> ({
      counter:prev.counter-1
  }))
}

 increament = ()=>{
    this.setState((prev)=> ({
        counter:prev.counter+1
    }))
 }

 render(){
   return <>
    <button onClick={()=>this.increament()}>+</button>
    <div>counter is {this.state.counter}</div>
     <button onClick={this.decreament}>-</button>
    </>
 }
}

export default CounterClass;