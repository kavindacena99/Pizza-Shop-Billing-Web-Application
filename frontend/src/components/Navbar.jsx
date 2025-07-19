import Header from "./Header";
import Logout from "./Logout";
function Navbar(){
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return(
        <div>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Admin Profile</a>
                            </li>
                            <li className="nav-item">
                                <Logout />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;