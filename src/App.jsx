import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routes/Router";
import Footer from "./Components/Footer/Footer";
import "./app.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./Components/Navbar/NavBar";


function App() {
  return (
    <NextUIProvider>
      <Router>
        <NavBar/>
        <AppRouter />
        <Footer />
      </Router>
    </NextUIProvider>
  );
}

export default App;
