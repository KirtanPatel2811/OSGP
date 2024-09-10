import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/admin/Admin";

export const backend_url = "http://localhost:5555";
export const currency = "₹";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
