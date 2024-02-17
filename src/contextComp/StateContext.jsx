import { createContext, useContext } from "react";
import UserComp from './UserComp';

const DataContext = createContext();

export const UserContextConsumer=()=> useContext(DataContext);

const DataComp = ()=>{
    const userData = {name:"org",id:154,key:"jasgdj"}
    return (
        <>
            <DataContext.Provider value={{userData}}>
                <UserComp />
            </DataContext.Provider>
        </>
    )
}

export default DataComp;