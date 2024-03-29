import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pagine/Home";
import Profile from "./Pagine/Profile";
import NotFound from "./Pagine/NotFound";
import NavbarComponent from "./Componenti/ComponentiComuni/NavbarComponent";
import Jobs from "./Pagine/Jobs";
import FakeComponent from "./Componenti/ComponentiHome/FakeComponent";
import Rete from "./Pagine/Rete";
import JobsSaved from "./Pagine/JobsSaved";
import MessagisticaComponent from "./Componenti/ComponentiComuni/MessagisticaComponent";

function App() {

  
  return (
    <>
    
      <BrowserRouter>
      <FakeComponent/>
        <NavbarComponent />
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/profile"} element={<Profile/>}></Route>
          <Route path={"/profile/:idUrl"} element={<Profile/>}></Route>
          <Route path={"/jobs_saved"} element={<JobsSaved/>}></Route>
          <Route path={"/jobs/"} element={<Jobs/>}></Route>
          <Route path={"/rete"} element={<Rete/>}></Route>
          <Route path={"*"} element={<NotFound/>}></Route>
        </Routes>
        <MessagisticaComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
