import SignUp from "./SignUp";
import Login from "./Login";
function Medium(props) {
  if(props.status)
  {
    return <Login/>
  }
  else
  {
    return <SignUp/>
  }
}
export default Medium;