import '../App.css';
import { Link } from 'react-router-dom';

function ActualInformation() {
  return (
    <div id="actual-information-container">   
        <section  className="actual-information">
            <div className="heading">
                <p className='date'>2. 2. 2022</p>
                <h2>Nepříjímám nové pacienty</h2>
            </div>
            <div className="description">  
                <p>S lítostí oznamuji, že vzhledem k momentální naplněné kapacitě ordinace již nemohu přijímat nové pacienty. </p>
                <p>Vím, že situace s dostupností psychiatrické léčby v Olomouci není dobrá. Můžete zkusit vyhledat pomoc také u psychologů a psychoterapeutů. Při výraznějším zhoršení psychického stavu lze využít služeb ambulantí péče ve Fakultní nemocnici v Olomouci bez objednání. Pro akutní stavy je na Klinice psychiatrie k dispozici psychiatr konající službu nepřetžitě. V případě problémů se závislostmi mohu doporučit spolek P-centrum v Lafayettově ulici.</p>
                <p> 
                <a href="https://www.fnol.cz/kliniky-ustavy-oddeleni/vseobecna-psychiatricka-ambulance">Klinika psychiatrie FNOL</a>
                </p>
                <p>
                <a href="http://www.p-centrum.cz">P-centrum, spolek</a>
                </p>
            </div>
        </section>
        <section  className="actual-information">
            <div className="heading">
                <p className='date'>23. 8. 2021</p>
                <h2>Online ordinace</h2>
            </div>
            <div className="description">  
                <p>Vzhledem k aktuální situaci týkající se pandemie COVID-19 jsem se rozhodla některé konzulatce přesunout do online režimu. </p>
                <p>Online ordinace funguje v prostředí MS Teams, 15 minut před zahájením konzultace Vám přijde SMS odkaz, na který stačí pouze kliknout, není potřebná žádná registrace. </p>
                <p>Jestli se bude naše předem domluvená konzultace konat u mně v ordinaci nebo online Vám dám vědět dostatečně dopředu prostřednictvím SMS zprávy.</p>
            </div>
        </section>
    </div> 
  );
}

export default ActualInformation;