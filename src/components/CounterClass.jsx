import { Component } from "react";
class CounterClass extends Component{
 constructor(){
   super()
    this.state = {counter:0}
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
     {/* <button onClick={()=>gitsetCounter(counter-1)}>-</button> */}
    </>
 }
}

export default CounterClass;