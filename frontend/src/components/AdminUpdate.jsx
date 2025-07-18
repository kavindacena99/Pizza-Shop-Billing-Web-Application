import API from "../services/api";
import { useState } from "react";


function AdminUpdate(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const fetchAdminProfile = async () => {
            try {
                const response = await API.get('/admin/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { name, username } = response.data;
                setName(name);
                setUsername(username);
            } catch (error) {
                if (error.response?.status === 401) {
                    navigate('/admin/login');
                } else {
                    setError("Failed to fetch admin profile.");
                }
            }
        };

        fetchAdminProfile();
    }, [navigate]);

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
            setSuccess("Profile updated successfully");
        } catch (err) {
            setError("Failed to update profile");
        }
    };

    return(
        <div>
            <form onSubmit={handleUpdate}>
                <div className="container mt-5 pt-5">
                    <h2>Update Admin Details</h2>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-dark">Update Details</button>
                </div>
            </form>
        </div>
    );
}

export default AdminUpdate;