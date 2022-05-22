import '../App.css';

function WaysToPay() {
  return (
    <div id="ways-to-pay-container">
        <section className="ways-to-pay">
            <div className="heading">
                <h2>Ordinace má smlouvu s pojišťovnami</h2>
            </div>
            <div className="description">
                <ul>
                    <li>VZP (111), VoZP (201), ČPZP (205), OZP (207) Poj. Škoda (209) a ZPMV (211)</li>
                </ul>
            </div>
        </section>
        <section className="ways-to-pay">
            <div className="heading">
                <h2>Ceník</h2>
            </div>
            <div className="description">
                <p>Klientům bez pojištění a jiných pojišťoven nabízím služby za přímou úhradu.</p>
                <ul>
                    <li>Vstupní konzultace nebo celkové psychiatrické vyšetření: 1500 Kč</li>
                    <li>Kontrolní konzultace nebo kontrolní psychiatrické vyšetření: 500 Kč / 25 min</li>
                </ul>
            </div>
        </section>
    </div>
  );
}

export default WaysToPay;

