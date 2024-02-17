import { useCounterContextUser } from "./ContextLogic";

let BComp = () => {
    let {counter, setCounter} = useCounterContextUser()

    return (
        <>
            <h1> Hello from Comp B{counter} </h1>
            <button onClick={()=>setCounter(p=>p+1)}>increament</button>
        </>
    )
}
export default BComp;