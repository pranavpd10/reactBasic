import { useState } from "react"

let data = {a:[1,2,3],b:[4,5,6],c:[7,8,9]}
const DropDowns =()=>{
    let [outerState,setOuterState] = useState(()=>Object.keys(data)[0]);
    let [innerState,setInnerState] = useState(()=>data[outerState][0]);

    return (
        <>
            <h2>drop down data is </h2>
            <select name="outer" id="outerId" defaultValue={outerState} onChange={(e) => setOuterState(e.target.value)} >
                {Object.entries(data)
                    .map((key) => {
                        return <option key={key[0]} value={key[0]}>{key[0]}</option>
                    })}
            </select>

            <select name="inner" id="innerId" defaultValue={innerState} onChange={(e) => setInnerState(e.target.value)} >
                {data[outerState].map(i=><option key={i} value={i}>{i}</option>)}
            </select>
        </>
    )
}

export default DropDowns;