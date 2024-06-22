
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Register} from './Sign up/Register';
import { LoginForm } from './Login/LoginForm';

function App() {
  return (
  
  <>
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Register/>}/>
  <Route path="/login" element={<LoginForm/>}/>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
