import { useState } from "react";

const Counter = ()=>{
    let [counter, setCounter] = useState(()=> 0)
    return (
        <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <div>counter is {counter}</div>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        </>
    )
}
export default Counter;