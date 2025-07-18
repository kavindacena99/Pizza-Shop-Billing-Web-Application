import API from '../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUpdate from '../components/AdminUpdate';

function Admin(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/');
            return;
        }


        const fetchAdminProfile = async () => {
            try {
                const response = await API.get('/admin/profile');
                const { name, username } = response.data;   

                setName(name);
                setUsername(username);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/');
                } else {
                    setError("Failed to fetch admin profile. Please try again later.");
                }
            }
        };

        fetchAdminProfile();
    }, [navigate]);

    return(
        <div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
                <p><strong>Name: {name}</strong></p>
                <p><strong>Username: {username}</strong></p>
            </div>
            <AdminUpdate />
        </div>
    );
}

export default Admin;