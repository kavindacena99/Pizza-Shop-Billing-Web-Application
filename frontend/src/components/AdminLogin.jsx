import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AdminLogin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/admin/login", { username, password });
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            
            Navigate('/store');
        }catch(error){
            alert("Login failed! Please check your credentials.");
            setError("Login failed! Please check your credentials.");
        }
    };

    return(
        <div className="container mt-5 pt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3 col-md-8">
                    <label className="form-label">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3 col-md-8">
                    <label className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;