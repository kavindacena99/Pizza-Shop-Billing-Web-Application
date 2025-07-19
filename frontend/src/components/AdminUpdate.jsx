import API from "../services/api";
import { useState } from "react";


function AdminUpdate(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await API.put('/admin/profile', {
                name,
                username,
                password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("Profile updated successfully");
            window.location.reload();
        } catch (err) {
            setError("Failed to update profile");
        }
    };

    return(
        <div>
            <div className="container col-md-5">
                <form onSubmit={handleUpdate}>
                    <h2><b>Update Admin Details</b></h2>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-dark">Update Details</button>
                </form>
            </div>
        </div>
    );
}

export default AdminUpdate;