import { useEffect, useState } from "react";

function AdminLogin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /*
    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/auth/login", { username, password });
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            
            navigate("/ownerdashboard");
        }catch(error){
            setError("Login failed! Please check your credentials.");
        }
    };
    */
    return(
        <div className="container mt-5 pt-5">
            <form>
                <div class="mb-3 col-md-8">
                    <label for="exampleInputUsername1" class="form-label">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div class="mb-3 col-md-8">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-dark">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;