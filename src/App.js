
import "./App.css";
//  app.js mein navbar .js use karna ha toh 
 // components and app.js same folder mein ha toh ./components
 import Navbar from "./components/Navbar/Navbar.js";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  // writing <Navbar is equivalent to writinng <Navbar> </Navbar> 
    return <div > 
      <Navbar />        
      {/* fgdgf */}
     <Homepage />
    </div>
  
}


export default App;
