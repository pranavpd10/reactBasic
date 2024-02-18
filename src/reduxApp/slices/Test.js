import axios from "axios";

let getUser = ()=>{
     return axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then(res=>res.data.map(x=>x.id))
}

let getUserAsync = async () =>{
    const res =  await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
    let final =  res.data.map(x=>x.id);
    return final;
}

let x = getUser()
console.log(x.then(r=>console.log(r)))

// let x = getUserAsync()
// console.log(x.then(r=>console.log(r)))