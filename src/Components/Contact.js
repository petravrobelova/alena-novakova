import '../App.css';

function Contact() {
  return (
    <div id="contact-container">
        <section className="contact">
            <div className="heading">
                <h2>Adresa</h2>
            </div>
            <div className="description adress">
                <p>Psychiatr, Psychoterapeut</p>
                <p>MUDr. Alena Nováková</p>
                <p>Pražská 223</p>
                <p>Olomouc</p>
                <p>779 00</p>
            </div>
        </section>
        <section className="contact">
            <div className="heading">
                <h2>Kontakt</h2>
            </div>
            <div className="description">
                <p>
                    <a href="mailto:alena.novakova@gmail.com">alena.novakova@gmail.com</a> 
                </p>
                <p>
                    <a href="tel:+420776317108">+420 776 317 108</a>
                </p>
            </div>
            <div id="contact-doesnt-exist">
                <p>Všechny kontaktní údaje jsou smyšlené.</p>
            </div>
        </section>
    </div>
  );
}

export default Contact;


