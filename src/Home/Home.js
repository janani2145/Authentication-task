import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/home">Authentication</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div  className="mt-5 container pt-5">
        <h1 className="text-center mt-5 pt-5">Welcome to this page 😊</h1>
        <p className="text-center">We're glad to see you here! 😃</p>
      </div>
    </>
  );
};
