
for (var i = 1;i<=3;i++){
    ( function(i){ setTimeout(() => {
        console.log("name is timeout "+i)
    }, 1000*i) })(i);
}


let x = 10
let arr = ["hi","hello"]
let mapArr = arr.map((val,ind)=>`${val} hello ${ind}`)
let predArr = arr.filter((val)=>val.startsWith("hi") ? true : false)

let intiObj = {"number":0}
let finObj = arr.reduce((obj,curr)=>{ ++obj.number;return obj},intiObj)
console.log("finObj " +JSON.stringify(finObj))

console.log(predArr)
let o = {
    "name":"org",
    cal(){
        console.log("the call is "+this.name)
    }
}

function fun(){
    console.log("use name "+this.name)
    let newf=()=>{
        console.log("name is "+this.name)
    }
    newf()
}
// fun.call(o)
// o.cal()
console.log("code ");