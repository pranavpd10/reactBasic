import { useState } from "react"

let ControlledForm = () => {

    let [name, setName] = useState("")
    let [number, setNumber] = useState("")
    let [review, setReview] = useState("best")

    let onChangeHandler = (e, func)  => {
        func(e.target.value)
    }

    let submitHandler = (e)=>{
        console.log("log for the submit")
        e.preventDefault();
        console.log(`name ${name} is, number ${number}, review ${review}`)
    }

    return (<form onSubmit={submitHandler}>
        <label htmlFor="name" >Enter name</label>
        <input type="text" id="name" value={name}
          onChange={(e)=>onChangeHandler(e, setName)}></input>
        <br />
        <label htmlFor="number">Enter number</label>
        <input type="number" id="number" 
        value={number}
        onChange={(e)=>onChangeHandler(e, setNumber)}/>
        <br />
        <label htmlFor="number">Enter number</label>
        <select id="review" 
        value={review}
        onChange={(e)=>onChangeHandler(e, setReview)}>
            <option value="good" >good</option>
            <option value="better" >better</option>
            <option value="best" >best</option>
        </select>
        <br />
        <button > Submit</button>
    </form>
    )
}

export default ControlledForm;