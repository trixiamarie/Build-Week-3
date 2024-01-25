import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pagine/Home';
import Profile from './Pagine/Profile';
import NotFound from './Pagine/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/profile'} element={<Profile/>}></Route>
      <Route path={'*'} element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
