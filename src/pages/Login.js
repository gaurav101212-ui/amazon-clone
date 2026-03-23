import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) =>{
     e.preventDefault();

     if(email === "admin@gmail.com" && password === "1234"){
      localStorage.setItem("login", "true");
        navigate("/");
     } else{
        alert("Invalid credentials");
     }
  }


    return(
        <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

        <h3 className="text-center mb-3">Sign In</h3>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-warning w-100">
            Login
          </button>

        </form>

        </div>
        </div>
    )
}

export default Login;