import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const nav =useNavigate();
    const formik=useFormik({
        initialValues : {
            userName:"",
            password:"",
        },
        validationSchema:Yup.object({
          userName:Yup.string().required("Username is required"),
          password:Yup.string().required("Password is required")
        }),
        onSubmit: async(values)=>{
           
            try {
                const response = await axios.post('http://localhost:8080/api/auth/user/login', {
                    userName: values.userName,
                    password: values.password
                });
                console.log('success',response.data)

                const responseBody =  response.data.data.body;
                console.log("data",responseBody);

                // Assuming the response contains a JWT token and username
                if(responseBody && responseBody.jwt) {
                    localStorage.setItem("token", responseBody.jwt);
                    localStorage.setItem("userName", responseBody.userName);
                    nav('/home');
                } 
                else {
                    alert("User is not found");
                    console.error("Unexpected response structure", response.data);
                }
            } 
            
            catch (err) {
                console.error(err);
                alert('Login failed.');
            }
        }
    })
   
    return (
        <>
            <div className="container mt-5 pt-5 text-dark d-flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className='form ps-5 pe-5 pt-5 pb-4 rounded-5 shadow '>
                    <h1 className='text-center'>Login</h1>
                    <div className="form-group mt-4 position-relative">
                        <input
                            type="text"
                            className="form-control  bg-light mb-2"
                            id="name"
                            name="userName"
                            value={formik.values.userName}
                            placeholder='UserName'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                            <i className="bi bi-person"></i>
                        </span>
                        {formik.touched.userName && formik.errors.userName ? (
                        <div className="text-danger  position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.userName}</div>
                    ) : null}
                    </div>
                  
                    <div className="form-group mt-4 position-relative">
                        <input
                            type={formik.values.showPassword ? "text" : "password"}
                            className="form-control bg-light mb-2"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                            onClick={() => formik.setFieldValue("showPassword",!formik.values.showPassword )}
                            style={{ cursor: 'pointer' }}
                        >
                            {formik.values.showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                        </span>
                        {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.password}</div>
                    ) : null}
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-3">Submit</button>
                    <div className="mt-3 d-flex ">
                        <p>
                           Dont't have an account?
                        </p>
                       <Link className="ms-3" to="/">
                            Signup
                            </Link>
                    </div>
                     <hr />
                </form>
            </div>
        </>
    )
}
