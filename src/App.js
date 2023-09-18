import { Container } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home/Home";
import Signup from "./Components/Home/Signup/Signup";
import './App.css';

function App() {
  return (
    <Container className="App" maxWidth="xl">
        <Home></Home>
        <Signup></Signup>
    </Container>
  );
}

export default App;
