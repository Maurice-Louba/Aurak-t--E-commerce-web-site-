
import Cinquième from "./Cinquième/Cinquième"
import Deuxieme from "./Deuxieme/Deuxieme"
import Footer from "./Footer/Footer"
import Huitième from "./Huitième/Huitième"
import Navbar from "./navbar/Navbar"
import Quatrième from "./Quatrième/Quatrième"
import Quatrième1 from "./Quatrième/Quatrième1/Quatrième1"
import Quatrième2 from "./Quatrième/Quatrième2/Quatrième2"
import Septième from "./septième/Septième"
import Sixième from "./Sixième/Sixième"

import Troisième from "./Troisième/Troisième"
import { BrowserRouter as Router, Routes, Route } from 'react-router'


const ToutAccueil = () => {
  return (
    
    <Router>
        <Navbar/>
        <Deuxieme/>
        <Troisième/>
        <Quatrième />
        
            <Routes>
                <Route path="/MaxiDress" element={<Quatrième1/>}/>
                <Route path='/All' element={<Quatrième2/>}/>
            </Routes>
        <Cinquième/>
        <Sixième/>
        <Septième/>
        <Huitième/>
        <Footer/>
    </Router>
    
  )
}

export default ToutAccueil
