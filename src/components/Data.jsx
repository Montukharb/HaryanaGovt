import React, { useContext } from 'react'
import {Data1,Data2} from './ChildComponents.jsx';
function Data() {
    const name = useContext(Data1);
    const age = useContext(Data2);
  return (
    <div>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>

    </div>
  )
}

export default Data
