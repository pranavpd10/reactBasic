import withCounterComp from "./WrapperComp"

let HoverComp = ({ counter, setCounter, num }) => {
    return (
        <>
            <div>counter is {counter}</div>
            <button onMouseOver={()=>setCounter(prev=>prev+num)}>click to increase counter</button>
        </>
    )
}

export default withCounterComp(HoverComp);