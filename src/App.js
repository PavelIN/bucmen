import {useState} from "react";
import logo from './logo.svg';
import './App.css';

const reqUrl = "http://localhost:8080"





const App =()=> {

const[data,setData]=useState("ddd");

 const getData  = async(data) => {
    const fetchParms = {
      metod:"GET",
      headers:{
        'Content-Type': 'application/json'
      },
    }
   const res = await fetch(reqUrl,fetchParms)
   setData(res)
  }

  return (
    <div className="App">
      <button className ="bucButton" onClick={getData}>PressMeBuc</button>
      <textarea className ="bucText">{data}</textarea>
    </div>
  );
}

export default App;
