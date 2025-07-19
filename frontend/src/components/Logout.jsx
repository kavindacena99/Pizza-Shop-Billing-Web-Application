import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return(
        <div>
            <a className="nav-link" onClick={handleLogout}>Admin Logout</a>
        </div>
    );
}

export default Logout;