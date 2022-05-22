import '../App.css';
import { NavLink } from "react-router-dom";


function ForThePacients() {
  return (
    <div id="for-the-pacients-container">
        <section id="for-the-pacients">
            <div className="heading">
                <h2>Informace pro pacienty</h2>
            </div>
            <div className="description">
                <ul>
                    <li>Konzultaci je nutné předem telefonicky domluvit.</li>
                    <li>Na telefonní hovory jsou vyhrazeny časy uvedené v záložce {" "}
                        <NavLink to="/ordinacni-hodiny">Ordinační hodiny</NavLink>.</li>
                    <li>Délka úvodní konzultace je 50 min, další konzultace se přizpůsobují potřebám pacienta.</li>
                    <li>V případě potřeby zrušení domluvené konzultace mne kontaktujte co nejříve prostřednictvím SMS zprávy.</li>
                    <li>Nabízené služby jsou hrazeny pojišťovnou, nebo přímou platbou.</li>
                </ul>
            </div>
        </section>
    </div>
  );
}

export default ForThePacients;

