

import Header from "./Components/header"
import NavigationMobile from "./Components/NavigationMobile"
import SmallerScreenSideBar from "./Components/SmallerScreenSideBar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer.jsx"
import ReceiptMaker from "./Pages/ReceiptMaker.jsx"
import { Routes,Route } from "react-router-dom"
import NotFound from './Pages/NotFound.jsx';
import LiveCurrencyRates from './Pages/LiveCurrencyRates.jsx'
import CurrencyConverter from "./Pages/CurrencyConverter.jsx"
function App() {

  return (
    <>
    <div className="min-h-screen min-w-full bg-secondary-white dark:bg-primary-black">
      <Header/>
      
      <div className="flex  justify-center flex-col">
        <SmallerScreenSideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ReceiptMaker" element={<ReceiptMaker/>}/>
          <Route path="/LiveCurrencyRates" element={<LiveCurrencyRates/>} />
          <Route path="/CurrencyConverter" element={<CurrencyConverter/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
       </div>
       <Footer/>
       <NavigationMobile/>
    </div>
    </>
  )
}

export default App
