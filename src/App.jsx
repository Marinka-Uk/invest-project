import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login";
import {Dashboard} from "./pages/Dashboard";
import {Expenses} from "./pages/Expenses";
import {Income} from "./pages/Income";
import { Report } from "./pages/Report";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />

  
        <Route path="/dashboard" element={<Dashboard />} >
        
         <Route path="expenses" element={<Expenses />} />
        <Route path="income" element={<Income />} />
        </Route>
       


      <Route path="/report" element={<Report />} />
      </Routes>
 
  );
}

export default App;



//маршут витрати і доходи вкладені маршрути в дашборд
//маршрут report сусідній маршрут з дашборд
//ще реджістер +1 після логін
//в дашборді інкомс і експенсес

