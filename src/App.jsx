import { BrowserRouter,Routes,Route } from "react-router-dom";
import Awal from "./Pages/Awal";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Awal/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
