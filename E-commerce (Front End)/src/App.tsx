import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import ToutAccueil from './components/Accueil/ToutAccueil'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
      useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // 👈 Important : false permet de rejouer l'effet à chaque scroll
    });

    // Forcer une "mise à jour" AOS à chaque rechargement
    AOS.refresh();
  }, []);


  return (


    <div>
      <ToutAccueil/>
    </div>
  )
}

export default App
