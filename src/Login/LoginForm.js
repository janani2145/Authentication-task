import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const nav =useNavigate();
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isAdminExists, setIsAdminExists] = useState(false)
    
    
    const addData = (e) => {
        e.preventDefault();
        console.log (name);
        console.log(password);
    }


    return (
        <>
            <div className="container mt-5 pt-5 text-dark d-flex justify-content-center">
                <form onSubmit={addData} className='form ps-5 pe-5 pt-5 pb-4 rounded-5 shadow '>
                    <h1 className='text-center'>Login</h1>
                    <div className="form-group mt-4 position-relative">
                        <input
                            type="text"
                            className="form-control  bg-light"
                            id="name"
                            name="name"
                            value={name}
                            placeholder='UserName'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                            <i className="bi bi-person"></i>
                        </span>
                    </div>
                  
                    <div className="form-group mt-4 position-relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-control bg-light"
                            id="password"
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            style={{ cursor: 'pointer' }}
                        >
                            {passwordVisible ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                        </span>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-4">Submit</button>
                    <div className="mt-3 d-flex ">
                        <p>
                           Dont't have an account?
                        </p>
                       <Link className="ms-3" to="/">
                            Signup
                            </Link>
                       
                    </div>
                </form>
            </div>
        </>
    )
}
