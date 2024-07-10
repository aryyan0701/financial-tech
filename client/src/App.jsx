import react from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import UserForm from "./pages/UserForm"
import Signup from "./pages/Signup"
import Foundations from "./pages/Foundations"
import BlogSection from "./pages/Blog"
import Debt from "./pages/Debt"
import Schemes from "./pages/Schemes"
import Login from "./pages/Login"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<UserForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/foundations" element={<Foundations/>}/>
        <Route path="/blogs" element={<BlogSection/>}/>
        <Route path="/dashboard/foundations/debt" element={<Debt/>}/>
        <Route path="/dashboard/scheme" element={<Schemes/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
