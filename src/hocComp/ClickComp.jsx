import withCounterComp from "./WrapperComp"

let ClickCounter = ({ counter, setCounter }) => {
    return (
        <>
            <div>counter is {counter}</div>
            <button onClick={()=>setCounter(prev=>prev+1)}>click to increase counter</button>
        </>
    )
}

export default withCounterComp(ClickCounter);