import React from "react";
import "./App.css";
import "tailwindcss";
function App() {

  console.log('hello this worked');
  let msg = prompt("HrGovt.com says")
  if(msg!=="")
  {
    console.log(msg);
  }
  else
  {
    console.log('empty message');
  }
  

  return (
    <>
      <div>
        <h2 className="text-4xl text-center pl-2">
          Welcome to React + vite + tailwindcfss
        </h2>
        
      </div>
    </>
  );
}
export default App;
