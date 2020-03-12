import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'





const Login = () => {
    let history = useHistory();
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ passwordError, setPasswordError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ showError, setShowError ] = useState(false)



    const handleSubmit = event => {
        event.preventDefault();
        
        console.log("Submitting");
        console.log(email, password);
        console.log(email !== "grayfullbuster522@gmail.com" || password !== "123");

        if(email == "")
        {
            setEmailError(true)
        
        } else {
            setEmailError(false)
        }
        if(password == "")
        {   
            
            setPasswordError(true)
            return
        } else {
            setPasswordError(false)
        }


        
        if(email !== "test@gmail.com" || password !== "123"){

            // console.log("email atau password salah")
            setShowError(true)
            return 

        } 
        localStorage.setItem("authenticated","true");
        history.push("/dashboard");
      };
    

    return(

      <div className="col-md-6 col-md-offset-3">
          
          <form onSubmit={handleSubmit}>
             <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(x) => setEmail(x.target.value)}
            />
            { emailError ? (<div className="input-feedback">Required</div>) : null }
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(x) => setPassword(x.target.value)}
            />
              {passwordError ? (<div className="input-feedback">Required</div>) : null }
            
            <div className="form-group">
            <button type="submit">Login</button>
            </div>


            <div className="alert alert-info">
                    Username: test@gmail.com<br />
                    Password: 123
                </div>

            {showError ? (<div className="input-feedback">Email atau Password Salah</div>) : null }

          </form>



        </div>
      
    )
}

export default Login;

