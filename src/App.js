
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Register} from './Sign up/Register';
import { LoginForm } from './Login/LoginForm';
import { Home } from './Home/Home';

function App() {
  return (
  
  <>
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Register/>}/>
  <Route path="/login" element={<LoginForm/>}/> 
  <Route path="/home" element={<Home/>}/>

  </Routes>
  </BrowserRouter>=
  </>
  );
}

export default App;
