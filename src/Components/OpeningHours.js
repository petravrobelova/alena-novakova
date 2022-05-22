import '../App.css';

function OpeningHours() {
  return (
    <div id="opening-hours-container">
        <section className="opening-hours">
            <div className="heading">
                <h2>Konzultace/vyšetření</h2>
            </div>
            <div className="description">
                <ul>
                    <li>Po předchozí telefonické domluvě.</li>
                    <li>Pondělí až pátek 8.00-19.00 (mimo časy určené pro telefonní hovory)</li>
                </ul>
            </div>
        </section>
        <section className="opening-hours">
            <div className="heading">
                <h2>Telefonní hovor</h2>
            </div>
            <div className="description">
                <p>Úterý 8.00-9.00 a Čtvrtek 18.00-19.00</p>
            </div>
        </section>
    </div>
  );
}

export default OpeningHours;

