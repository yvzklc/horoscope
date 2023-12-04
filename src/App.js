import Navbar from "./components/Navbar/navbar.js";
import Main from "./components/Main/Main.js";
import { data } from "./helper/data";
function App() {
  return (
    <div >
      <Navbar/>
      <Main data={data}/>
    </div>
  );
}

export default App;
