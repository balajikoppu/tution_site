import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import FindTutor from "./pages/FindTutor"
import BecomeTutor from"./pages/BecomeTutor"
import Pricing from "./pages/Pricing"
import PaymentPage from "./pages/PaymentPage"


import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="find_tutor" element={<FindTutor/>}/>
            <Route path="become_tutor" element={<BecomeTutor/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="payment" element={<PaymentPage/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App