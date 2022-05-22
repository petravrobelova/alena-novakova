import '../App.css';
import profilePicture from "../images/pexels-pixabay-38554.jpg";


function AboutTheDoctor() {
  return (
      <div id="about-the-doctor-container">
        <section id="about-the-doctor">
            <div className="heading">
                <h2>Informace o lékařce</h2>
            </div>
            <div className="about-the-doctor-container">
            <div id="doctor-image">
                <img id="profile-picture" src={profilePicture} alt="Obrázek lékařky"/>
            </div>
            <div className="about-the-doctor-description">
                <p>Jmenuji se Alena Nováková a nabízím služby v oblasti ambulantí psychiatrie v Olomouci.</p>
                <ul>
                    <li>Od roku 2015 nabízím soukromou psychoterapeutickou praxi, kterou může hradit zdravotní pojišťovna. </li>
                    <li>Během konzultací se snažím k pacientům přistupovat s empatií, respektem a ohledem na jejich vlastní životní zkušenosti. </li>
                    <li>Zabývám se především léčbou závažných psychických onemocnění (schizofrenie, hraniční porucha osobnosti, apod.) a léčbou závislosti na návykových látkách.</li>
                    <li>V letech 2004-2015 jsem pracovala v psychiatrické léčebně Bohnice - zkušenosti s klasickou psychiatrií, léčbou závažných psychických onemocnění (schizofrenie, hraniční porucha osobnosti, apod.) a léčbou závislosti.</li>
                    <li>Vystudovala jsem všeobecné lékařství na Lékařské fakultě Univerzity Palackého v Olomouci. Studium jsem dokončila v roce 2003. </li>
                    <li>Nadále se vzdělávám na odborných kurzech a workshopech. Absolvovala jsem roční kurz arteterapie a muzikoterapie, také workshop krizové intervence a seminář asertivního chování.</li>
                    <li>Jsem členem odborné organizace Česká lékařská komora.</li>
                </ul>
            </div>
            </div>
        </section>
    </div>
  );
}

export default AboutTheDoctor;


