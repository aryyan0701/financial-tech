import react from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import UserForm from "./pages/UserForm"
import Foundations from "./pages/Foundations"
import BlogSection from "./pages/Blog"
import Debt from "./pages/Debt"
import Schemes from "./pages/Schemes"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<UserForm/>}/>
        <Route path="/form/dashboard" element={<Dashboard/>}/>
        <Route path="/form/dashboard/foundations" element={<Foundations/>}/>
        <Route path="/blogs" element={<BlogSection/>}/>
        <Route path="/dashboard/foundations/debt" element={<Debt/>}/>
        <Route path="/dashboard/scheme" element={<Schemes/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
