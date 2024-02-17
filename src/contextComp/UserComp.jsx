import {UserContextConsumer} from './StateContext';

const UserComp = ()=>{
    const {userData} = UserContextConsumer()
    console.log("userData "+userData)
    return <h1>Hello user {userData.id}</h1>
}

export default UserComp;