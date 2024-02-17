import { useReducer } from "react";

const actions = {
    INCREAMENT: "increament",
    DECREAMENT: "decreament",
    MARK: "mark"
}

const incAction = () =>  {return { type: actions.INCREAMENT }}
const decAction = () => {return { type: actions.DECREAMENT }}
const markAction = () => {return { type: actions.MARK }}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.INCREAMENT:
            return { ...state, count: state.count+1};
        case actions.DECREAMENT:
            return { ...state, count: state.count-1 }
        case actions.MARK:
            state.marks.push(state.count);
            let r = { ...state };
            return r;
    }
}

const ReducerCounter = () => {
    let counterData = { count: 0, marks: [] }
    let [state, dispatch] = useReducer(reducer, counterData);
    return (
        <>
            <button onClick={()=>dispatch(incAction())}>increament</button>
            <button onClick={()=>dispatch(decAction())}>decreament</button>
            <button onClick={()=>dispatch(markAction())}>mark</button>
            <h1>{state.count}</h1>
            <div style={{height:'180px',overflow:"scroll",border:"solid black 1px"}}>
            {state.marks.map((val, index)=><p key={index}>{val}</p>)}
            </div>
            
        </>
    )
}

export default ReducerCounter;