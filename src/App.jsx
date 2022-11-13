import styles from "./style";
import { CTA, Footer, Navbar, Home, Leadership, Events } from "./components";
import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Leadership/>} />
      </Routes>
      
      

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <Footer />
      </div>
    </div>
  </Router>
  
);

export default App;
