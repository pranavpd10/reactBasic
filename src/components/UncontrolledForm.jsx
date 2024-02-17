import axios from "axios";
import { useEffect } from "react";

let UserForm = () => {

    useEffect(() => {
        console.log("mounting effect ")
        const baseURL = "https://jsonplaceholder.typicode.com/posts";
        axios.post(baseURL,{"name":"org"})
        .then(res=>console.log(res.data))
        .catch(err=>console.error("error occured "+err))
        return(()=>{ console.log("unmounting effect ")})
    }, [])

    const userDataHandle = (e) => {
        e.preventDefault();
        let data = document.getElementById('userForm');
        let fData = new FormData(data)
        console.log(fData.get("fname"))
    }

    return (
        <form id="userForm" onSubmit={userDataHandle}>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    )
}
export default UserForm;