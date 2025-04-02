import React,{ createContext } from 'react';
import 'tailwindcss';
import Data from './Data';
export const Data1 = createContext();
export const Data2 = createContext();
function ChildComponents({myfunct}) {
  
  let name = "montu";
  let age = "22";
  return (
    <div>
      <h2>Child Components</h2>
      <p>This is a child component.</p>
      <button className="ml-4 border rounded p-2 bg-green-700 text-amber-50 font-bold text-3xl inset-shadow-2xs cursor-pointer animate-pulse" onClick={myfunct}>check function via props</button>
      <Data1.Provider value={name}>
        <Data2.Provider value={age}>
        <Data/>
        </Data2.Provider>
      </Data1.Provider>
    </div>
    
  );
}
export default ChildComponents;
