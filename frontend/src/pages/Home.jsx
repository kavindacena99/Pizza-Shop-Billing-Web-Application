import AdminLogin from "../components/AdminLogin";
import Header from "../components/Header";

function Home(){
    return(
        <div>
            <Header />
            <div className="row">
                <div className="col-md-6 text-center pt-5">
                    <h1 className="text-center mt-5">Welcome to the Admin Dashboard</h1>
                    <p className="text-center">Please log in to manage your application.</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <AdminLogin />
                </div>
            </div>
        </div>
    );
}

export default Home;