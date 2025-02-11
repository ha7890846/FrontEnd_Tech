import './App.css'
import UseStateHook from './Components/UseStateHook';
import Variables from './Components/Variables'
function App() {
  return (
    <>
    <div className='sidevar'>
      <a href="#first">Variablesss</a>
      <a href="#second">Second Var</a>
    </div>
    <div id='first'>
      <Variables />
    </div>
    <div id='second'>
      <h1>this is Second Div</h1>
      <UseStateHook/>
    </div>
    </>
  )
}

export default App;