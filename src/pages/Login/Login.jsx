import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "SignUp" ? <input value={name} onChange={(e)=>{e.target.value}} type="text" placeholder='Your name' /> : <></>}
          
          <input value={email} onChange={(e)=>{e.target.value}} type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{e.target.value}} type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> :
          <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login