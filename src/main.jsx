import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './components/Counter.jsx'
import CounterClass from './components/CounterClass.jsx'
import UserForm from './components/UncontrolledForm.jsx'
import ControlledForm from './components/ControlledForm.jsx'
import ClickCounter from './hocComp/ClickComp.jsx'
import HoverComp from './hocComp/HoverComp.jsx'
import Acomp  from './contextComp/AComp.jsx'
import ContextLogic from './contextComp/ContextLogic.jsx'
import DataComp from './contextComp/StateContext.jsx'
import ReducerCounter from './reducers/CounterReducer.jsx'
import DropDowns from './components/DoubleDropDown.jsx'
// accessCode=641-950-996 locale=en-US clickNum=440717399770961 
//  https://www.microsoft.com/en-us/learning/dashboard.aspx
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <CounterClass/> */}
    {/* <UserForm /> */}
    {/* <ControlledForm/> */}
    {/* <ClickCounter/> */}
    {/* <HoverComp num={5} /> */}
    {/* <ContextLogic>
      <Acomp />
    </ContextLogic> */}
    {/* <DataComp/> */}

    {/* <ReducerCounter/> */}
    <DropDowns/>
  </>
)
