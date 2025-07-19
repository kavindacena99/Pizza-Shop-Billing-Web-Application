import API from '../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUpdate from '../components/AdminUpdate';
import Header from '../components/Header';

function Admin(){
    return(
        <div>
            <Header />
            <div className="container mt-5">
                <div>
                    <AdminUpdate />
                </div>
            </div>
        </div>
    );
}

export default Admin;