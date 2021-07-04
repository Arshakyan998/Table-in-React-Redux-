import React from "react";
import "./App.css"

import GetTables from "./components/GetTables";
import TablelContent from './components/TablelContent'

function App() {
  const [load,setLoad]=React.useState(false)

  const [info,setInfo]=React.useState('')

const inform=(text)=>{
  setInfo(text)
  setLoad(true)
}

  return (
    <div className="App">
      <div className="row container">
        <button className="btn btn-info" onClick={()=>inform("info")}>info</button>
        <button type="button" className="btn btn-danger" onClick={()=>inform("danger")}>Danger</button>
      </div>
     {load?
     <>
     <GetTables btn={info}/>
      <TablelContent/>
      </>:<h3>  npx  json-server --watch public/db.json --port=3001<br/>
               npx  json-server --watch public/big.json --port=3002</h3>
  }
    </div>
  );
}

export default App;
