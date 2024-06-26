import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { registerApi, adminApi } from '../Apis/authApis';
import { useState, useEffect } from 'react';

export const Register = () => {
  const [isAdminExists, setIsAdminExists] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        const response = await axios.get(adminApi);
        setIsAdminExists(response.data.exists);
      } catch (error) {
        console.error("Error checking admin existence:", error);
      }
    };

    checkAdminExists();
  }, []);

  const formik = useFormik({
    initialValues: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      userRole: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Enter Username"),
      email: Yup.string().email("Invalid Email Address").required("Enter Email"),
      mobileNo: Yup.string().matches(/^[0-9]{10}$/, "Invalid Mobile Number").required("Enter Mobile Number"),
      password: Yup.string().min(8, "Password must be at least 8 characters eg:(Axxx@123)").required("Enter Password"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must be match").required("Enter Confirm Password"),
      userRole: Yup.string().required("Select User Role"),
    }),
    onSubmit: async (values) => {
      if (values.userRole === "ADMIN" && isAdminExists) {
        formik.setErrors({ userRole: "Role 'Admin' is not applicable for registration." });
        return;
      }

      try {
        await axios.post(registerApi, values);
        alert("Registration successful!");
        nav("/login");
      } catch (error) {
        console.log(error.response.data);
        formik.setErrors({ apiError: "Registration failed!" });
      }
    },
  });

  return (
    <>
      <div className="container p-4 mt-3 text-dark d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit} className='form ps-5 pe-5 pb-2 rounded-5 shadow w-50'>
          <h1 className='text-center pt-3'>Get Started!</h1>
          {formik.errors.apiError && <div className="text-danger text-center">{formik.errors.apiError}</div>}
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-person position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type="text"
              className="form-control ps-5 bg-light"
              name="userName"
              value={formik.values.userName}
              placeholder='Full Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type="email"
              className="form-control ps-5 bg-light"
              name="email"
              value={formik.values.email}
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className=" text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type={formik.values.showPassword ? "text" : "password"}
              className="form-control ps-5 bg-light"
              name="password"
              value={formik.values.password}
              placeholder='Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
              onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi ${formik.values.showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
            </span>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-lock position-absolute  top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type={formik.values.showConfirmPassword ? "text" : "password"}
              className="form-control ps-5 bg-light"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              placeholder='Confirm Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
              onClick={() => formik.setFieldValue('showConfirmPassword', !formik.values.showConfirmPassword)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi ${formik.values.showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
            </span>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-telephone position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              type="tel"
              className="form-control ps-5 bg-light"
              name="mobileNo"
              value={formik.values.mobileNo}
              placeholder='Mobile Number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobileNo && formik.errors.mobileNo ? (
              <div className=" text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.mobileNo}</div>
            ) : null}
          </div>
          <div className="form-group mt-4 position-relative">
            <i className="bi bi-person-badge position-absolute  top-50 start-0 translate-middle-y ms-3"></i>
            <select
              className="form-select ps-5 bg-light"
              name="userRole"
              value={formik.values.userRole}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            {formik.touched.userRole && formik.errors.userRole ? (
              <div className="text-danger position-absolute" style={{ top: '100%', left: '0' }}>{formik.errors.userRole}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-4">Create Account</button>
          <div className=" mt-3 d-flex justify-content-center">
            <p>Already have an account?</p>
            <Link className="ms-4" to="/login">
              SignIn
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
