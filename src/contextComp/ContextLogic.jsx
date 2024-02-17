import { createContext, useContext, useState } from "react"
// compo A -> B -> C 

const CounterContext = createContext();

export function useCounterContextUser() {
    return useContext(CounterContext);
}

let ContextLogic = ({ children }) => {
    let [counter, setCounter] = useState(0)
    let [whiteBackGround, setwhiteBackGround] = useState(true)
    let styleProp = whiteBackGround ? {backgroundColor: "#F6BB42"} : 
         {backgroundColor: "#37BC9B"}
    
    
    return (
        <>
            <CounterContext.Provider value={{ counter, setCounter }}>
                {children}
            </CounterContext.Provider>
        </>
    )
}

export default ContextLogic;