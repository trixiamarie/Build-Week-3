import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pagine/Home";
import Profile from "./Pagine/Profile";
import NotFound from "./Pagine/NotFound";
import NavbarComponent from "./Componenti/ComponentiComuni/NavbarComponent";
import FooterComponent from "./Componenti/ComponentiComuni/FooterComponent";
import Jobs from "./Pagine/Jobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/jobs"} element={<Jobs />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
