import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [cpasswordVisible, setCpasswordVisible] = useState(false);

    const addData = (e) => {
        e.preventDefault();
        // Handle form submission
    }

    return (
        <>
            <div className="container p-5 text-dark d-flex justify-content-center">
                <form onSubmit={addData} className='form ps-5 pe-5 pb-2 rounded-5 shadow w-50'>
                    <h1 className='text-center pt-3'>Sign Up</h1>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-person position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            type="text"
                            className="form-control ps-5 bg-light"
                            name="name"
                            value={name}
                            placeholder='Full Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            type="email"
                            className="form-control ps-5 bg-light"
                            name="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-control ps-5 bg-light"
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </span>
                    </div>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-lock position-absolute  top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            type={cpasswordVisible ? "text" : "password"}
                            className="form-control ps-5 bg-light"
                            name="cpassword"
                            value={cpassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                            onClick={() => setCpasswordVisible(!cpasswordVisible)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={`bi ${cpasswordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </span>
                    </div>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-telephone position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            type="tel"
                            className="form-control ps-5 bg-light"
                            name="phone"
                            value={phone}
                            placeholder='Phone Number'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4 position-relative">
                        <i className="bi bi-person-badge position-absolute  top-50 start-0 translate-middle-y ms-3"></i>
                        <select
                            className="form-select ps-5 bg-light"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-4">Create Account</button>
                    <p className="text-center mt-3">
                        <a href="javascript:void(0)" className="text-decoration-none">
                            Already have an account?
                        </a>
                        <a href="/signup" className="ms-4">
                            SignIn
                        </a>
                    </p>
                </form>
            </div>
        </>
    )
}
