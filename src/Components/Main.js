import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActualInformation from './ActualInformation';
import AboutTheDoctor from './AboutTheDoctor';
import ForThePacients from './ForThePacients';
import WaysToPay from './WaysToPay';
import OpeningHours from './OpeningHours';
import Contact from './Contact';

function Main() {
    return (
        <div className='container'>
        <main>
            <Routes> 
                <Route path="/" element={<ActualInformation />} />
                <Route path="/o-lekarce" element={<AboutTheDoctor />} />
                <Route path="/pro-pacienty" element={<ForThePacients />} />
                <Route path="/zpusob-uhrady" element={<WaysToPay />} />
                <Route path="/ordinacni-hodiny" element={<OpeningHours />} />
                <Route path="/kontakt" element={<Contact />} />
            </Routes>
        </main>
        </div>
    );
  }
  
  export default Main;