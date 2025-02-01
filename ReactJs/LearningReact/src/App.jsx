import ClassCompo from "./01_components/ClassCompo"
import FunctionCompo from "./01_components/FunctionCompo"
import Child from "./02_props/Child";
import Parent from "./02_props/Parent";
import {PropsStr,  PropsInt, PropsObj, DestructureProps} from "./02_props/propsEx"
import "./App.css"
function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
     <h1>Hello world</h1>
     <ClassCompo/>
     <FunctionCompo/>
     <PropsStr name="Harley David"/>
     <PropsInt age="45"/>
     <PropsObj car={carInfo}/>
     <DestructureProps actorName="Shahrukh Khan" movieName="Baazigar"/>
     <h1>This is Child Component</h1>
     <Child/>
     <h1>This is Parent Component</h1>
     {/* <Parent/> */}
    </>
  )
}

export default App
