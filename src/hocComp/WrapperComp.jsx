import { useState } from "react"

const withCounterComp = (Wrapper) => (props) => {
    let [counter, setCounter] = useState(0);
    return (<>
        <Wrapper {...props} counter={counter} setCounter={setCounter} />
    </>)
}

export default withCounterComp;