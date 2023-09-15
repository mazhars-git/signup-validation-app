import { Container } from "@mui/material";
import Home from "./Components/Home/Home/Home";
import Signup from "./Components/Home/Signup/Signup";

function App() {
  return (
    <Container maxWidth="md">
        <Home></Home>
        <Signup></Signup>
    </Container>
  );
}

export default App;
