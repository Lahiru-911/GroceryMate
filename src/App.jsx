import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routes/Router";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
      <Footer/>
    </Router>
  );
}

export default App;
