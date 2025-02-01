import Child from "./Child";
const Parent =()=>{
    const personInfo = {name:"Shekhabat", age:38}
    return(
        <div>
            <h1>This is Parent Component</h1>
            <Child person={personInfo}/>
        </div>
    );
}
export default Parent;