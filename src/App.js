import './App.css';
import Home from './Components/Home';
import Doctor from './Components/Doctor';
import Userinfo from './Components/Userinfo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/doctor1' element={<Doctor />} />
        <Route exact path='/doctor2' element={<Doctor />} />
        <Route exact path='/doctor3' element={<Doctor />} />
        <Route exact path='/userinfo' element={<Userinfo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


