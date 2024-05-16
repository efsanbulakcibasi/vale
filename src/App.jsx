import { BrowserRouter, Route,Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Instructions from "./pages/Instructions"
import Socket from "./pages/Socket"
import Current from "./pages/Current"
import CarInformation from "./pages/CarInformation"
import CarLocked from "./pages/CarLocked"
import Content from "./pages/Content"
import EmergencyStop from "./pages/EmergencyStop"
import QrCode from "./pages/QrCode"

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/socket" element={<Socket/>}/>
        <Route path="/current" element={<Current/>}/>
        <Route path="/carInformation" element={<CarInformation/>}/>
        <Route path="/carLocked" element={<CarLocked/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/emergencyStop" element={<EmergencyStop/>}/>
        <Route path="/qrCode" element={<QrCode/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
  ) 
}

export default App
