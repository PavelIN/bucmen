import { useState } from "react";
import logo from './logo.svg';
import './App.css';

const reqUrl = "http://localhost/test"

const App =()=> {

const[data,setData]=useState("ddd");

 const getData  = async() => {
    const fetchParms = {
      metod:"GET",
      headers:{
        'Content-Type': 'application/json'
      },
    }
   const res = await fetch(reqUrl,fetchParms)
   const parsedRes = await res.text()
   setData(parsedRes)
  }

  return (
    <div className="App">
      <button onClick={getData}>PressMeBuc</button>
      <textarea value={data}/>
    </div>
  );
}

export default App;
