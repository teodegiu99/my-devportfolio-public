'use client'
import { useEffect, useState } from 'react';
import HomepageMobile from '../home/HomepageMobile';
import Homepage from '../home/Homepage';


const IsDesktop = () => {
    const [shouldRender, setShouldRender] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Logica per determinare se caricare il componente o meno
        const screenSize = window.innerWidth;
        setShouldRender(screenSize >= 768); // Ad esempio, carica solo se la larghezza è maggiore di 768 pixel
      };
  
      // Aggiungi un listener per il ridimensionamento dello schermo
      window.addEventListener('resize', handleResize);
  
      // Controlla le dimensioni iniziali
      handleResize();
  
      // Pulisci il listener al momento della disinstallazione del componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return shouldRender ? <Homepage /> : <HomepageMobile />;
  };

  export default IsDesktop;