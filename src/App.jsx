import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Video from "./Pages/EventPage"
import Home from "./Pages/Home"
export default function App() {
  return (
   <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />

     </Routes>
     </Router>

  )
}