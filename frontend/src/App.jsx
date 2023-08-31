import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Counter from './Components/Counter';
import UseEffectOne from './Components/UseEffectone';
import UseEffectTwo from './Components/UseEffectTwo';
import UseEffectThree from './Components/UseEffectThree';
import UseEffectFour from './Components/UseEffectFour';
import SingleProduct from './Components/SingleProduct';
import MultipleProduct from './Components/MultiProduct';
import { useContext, useState } from 'react';
import Mapping from './Components/Mapping';
import DynamicStyle from './Components/DynamicStyle';
import Props from "./Components/Props";
import StateEffect from './Components/StateEffect';
import { AuthContext } from './Context/AuthContext';
import Register from './Components/Register';
import Login from './Components/Login';



function App() {
const {state} = useContext(AuthContext);
console.log(state,"state here from context") 
  const [name,setName] = useState("all")
  console.log(name,"data");
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route exact path='/counter' element={<Counter name ={name} setName={setName} myName="Kunal" myAge= "28" Student ={["a","0"]}/>} />
      <Route exact path='/effect-1' element={<UseEffectOne />} />
      <Route exact path='/effect-2' element={<UseEffectTwo />} />
      <Route exact path='/effect-3' element={<UseEffectThree />} />
      <Route exact path='/effect-4' element={<UseEffectFour />} />
      <Route exact path='/multi' element={<MultipleProduct/>}/> 
      <Route exact path='/Single-Product/:id' element={<SingleProduct/>} />
      <Route exact path='/Mapping' element={<Mapping array= {[{name:"shoes",price:"500",image:""}]}/>} />,
      <Route exact path='/Dynamic' element={<DynamicStyle/>} />
      <Route exact path='/Props' element={<Props/>} />
      <Route exact path='/State' element={<StateEffect/>} />
    </Routes>
  </div>
  );
}

export default App;
