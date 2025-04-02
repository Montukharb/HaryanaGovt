import React,{useState,useEffect,useRef,/*,useMemo,useCallback */} from "react";
import "../style/App.css";
import "tailwindcss";
import ChildComponents from '../components/ChildComponents.jsx';
import { Route,Routes } from "react-router";
import { Link } from "react-router";
import Medium from "./Medium.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import FormsMy from "./FormsMy.jsx";
import FoamValidation from "./FoamValidation.jsx";
function App() {
 
  
  // let msg = prompt("HrGovt.com says")
  // if(msg!=="")
  // {
  //   console.log(msg);
  // }
  // else
  // {
  //   console.log('empty message');
  // }
  // console.error("error");
  // // console.info("any important message");

  function buttonfun() {
    location.href = "https://google.com";
  }
  // let id = document.getElementById('big').innerText;
  // console.log(id);
//  let promices = new Promise((resolve, rejected)=>{
//     setTimeout(()=>{
//         resolve('hello montu');
//     },5000);
//     })
//   promices.then((data)=>{
//     console.log(data);
//   }
//   ).catch((err)=>{
//     console.log(err);
//   })
// promices.finally(()=>{
//   console.log('finally');
// });
// let promices = new Promise((resolve, rejected)=>{
// let promice = new Promise((resolve,rejected)=>{
//   resolve('https://jsonplaceholder.typicode.com/users');
//   rejected();
// })
//  promice.then((data)=>{
//   let returndata = fetch(data)
//   console.log(returndata.json());
// }).catch((err)=>{
//   console.log(err);
// })
//  Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json()),
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(res => res.json())
//  ]).then(([post, user]) => {
//   console.log('Post:', post);
//   console.log('User:', user);
// })
// .catch(error => console.error('Error:', error));
    function myfunction(){
      // alert("passing function via props")
    }
    const [count, setCount] = useState(0);
    useEffect(()=>{
      // alert("use effect run only once by default")
    }),[count]  

    const texttarget = useRef();
    const changedom = ()=>{
      texttarget.current.style.background = "red";
    }
    // const memo = useCallback(()=>{
    //   console.log("hello this worked");
    // })[count]
    console.log("ddd");

  return (
    <div>
      <div>
        <h2 className="text-4xl pt-4 text-center pl-2"id="buttonid" >
          Welcome to React + vite + Tailwindcss
        </h2>
        <button className="bg-amber-500 px-4 py-2 mr-2 rounded shadow-2xl cursor-pointer" onClick={buttonfun} >Go to Google</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-2xl cursor-pointer">
          self button
        </button>
        <div id="big" className="jtsource">
          <h1>10</h1>
          <h1>20</h1>
          <h1>30</h1>
        </div>
        <ChildComponents myfunct = {myfunction} />
        <Medium status = {false}/>

         <button onClick={()=>{setCount(count+1)}}
         className="bg-amber-500 px-4 py-2 mr-2 rounded shadow-2xl cursor-pointer"
         
         >increse_count{count}</button>
         
          <input type="text" className="border rounded p-2 mr-2" ref={texttarget} />

        <button className="bg-amber-500 px-4 py-2 mr-2 rounded shadow-2xl cursor-pointer" onClick={changedom} >Change-Dom</button>
  
      </div>
      
      {/* Use memo disable unnessary function calling let's see example */}
      <h2>multiply value</h2>
      {/* use callback hook works as a use memo thats only one difference usecallback hook return usecallback memoized function and usememo return memoized value
      
      uses :  usecall back stop the re-rendering of the components and play according to need 
      */}
       <Link to="/"><h1>Home</h1></Link>
       <br />
       <Link to="/dashboard"><h1>Dashboard</h1></Link>
       <br />
        <Link to="/Form"><h1>Forms</h1></Link>
        <Link to="/FoamValid"><h1>Foam Validation page</h1></Link>
      <Routes>
         <Route path="/dashboard" element={<Dashboard/>}/>  
         <Route path="/" element={<Login/>}/>   
         <Route path="/Form" element={<FormsMy/>}/>  
         <Route path="/FoamValid" element={<FoamValidation/>}/>
         <Route path="/*" element={<h1>Page not found</h1>}/>  
      </Routes>
  
    </div>
  );
}
export default App;
